// scripts/fetchGitHubTimeline.js - INCREMENTAL VERSION
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Octokit } from "@octokit/rest";

dotenv.config({ path: ".env.local" });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "workingonstudio";
const GITHUB_REPO = process.env.GITHUB_REPO || "workingon.studio";

if (!GITHUB_TOKEN) {
  console.error("❌ Please set GITHUB_TOKEN environment variable");
  process.exit(1);
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN,
  userAgent: "WorkingOn-Studio-Timeline",
});

// Read existing timeline to get the last commit date
function getLastCommitDate() {
  const timelineFile = path.join(process.cwd(), "src", "data", "timeline-github.json");

  if (!fs.existsSync(timelineFile)) {
    console.log("📝 No existing timeline found, will fetch all commits");
    return null;
  }

  try {
    const existingTimeline = JSON.parse(fs.readFileSync(timelineFile, "utf8"));

    if (!existingTimeline.entries || existingTimeline.entries.length === 0) {
      return null;
    }

    // Get the most recent commit date
    const lastEntry = existingTimeline.entries[existingTimeline.entries.length - 1];
    console.log(`📅 Last commit in timeline: ${lastEntry.hash} (${lastEntry.date})`);
    return lastEntry.date;
  } catch (error) {
    console.warn("⚠️  Could not read existing timeline:", error.message);
    return null;
  }
}

// Your existing helper functions (keep these as-is)
function findPRForCommit(prCommitsMap, commit) {
  return prCommitsMap[commit.sha] || null;
}

function extractBracketTags(message) {
  const bracketMatches = message.match(/^\[([^\]]+)\]/);
  return bracketMatches ? [bracketMatches[1].toLowerCase()] : [];
}

function determineTypeFromPR(pr, commit, branchName) {
  const message = commit.commit.message;
  const messageLower = message.toLowerCase();
  const bracketTags = extractBracketTags(message);

  if (bracketTags.includes("transparency")) return "transparency";
  if (bracketTags.includes("release")) return "release";
  if (bracketTags.includes("hotfix")) return "hotfix";
  if (bracketTags.includes("docs")) return "docs";
  if (bracketTags.includes("feature")) return "feature";
  if (commit.parents && commit.parents.length > 1) return "merge";
  if (pr) return "feature";
  if (
    messageLower.includes("release") ||
    messageLower.includes("version") ||
    messageLower.match(/^v\d+\./)
  ) {
    return "release";
  }
  if (branchName && branchName !== "main" && branchName !== "master") return "feature";
  return "commit";
}

async function getTagsWithDates(octokit, owner, repo) {
  try {
    const tags = await octokit.paginate(octokit.rest.repos.listTags, {
      owner: owner,
      repo: repo,
      per_page: 100,
    });

    const versionTags = tags.filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag.name));
    console.log(`📦 Found ${versionTags.length} version tags`);

    if (versionTags.length === 0) return [];

    const tagsWithDates = [];
    for (const tag of versionTags) {
      try {
        const { data: tagCommit } = await octokit.rest.repos.getCommit({
          owner: owner,
          repo: repo,
          ref: tag.commit.sha,
        });

        tagsWithDates.push({
          name: tag.name,
          date: new Date(tagCommit.commit.committer.date),
          sha: tag.commit.sha,
        });
      } catch (error) {
        console.warn(`Could not fetch commit for version tag ${tag.name}`);
      }
    }

    tagsWithDates.sort((a, b) => a.date - b.date);
    return tagsWithDates;
  } catch (error) {
    console.warn(`Could not fetch tags with dates: ${error.message}`);
    return [];
  }
}

function generateVersionForCommit(commit, allCommitsInOrder, tagsWithDates) {
  const message = commit.commit.message;
  const versionMatch = message.match(/^v?(\d+\.\d+\.\d+)/);
  if (versionMatch) return `v${versionMatch[1]}`;

  const commitDate = new Date(commit.commit.committer.date);

  if (tagsWithDates.length === 0) {
    const commitIndex = allCommitsInOrder.findIndex((c) => c.sha === commit.sha);
    const minor = Math.floor(commitIndex / 15);
    const patch = commitIndex % 15;
    return `v1.${minor}.${patch}`;
  }

  let relevantTag = null;
  for (let i = tagsWithDates.length - 1; i >= 0; i--) {
    if (commitDate >= tagsWithDates[i].date) {
      relevantTag = tagsWithDates[i];
      break;
    }
  }

  if (!relevantTag) relevantTag = tagsWithDates[0];

  const matchingTag = tagsWithDates.find(
    (tag) => Math.abs(new Date(tag.date).getTime() - commitDate.getTime()) < 1000
  );

  if (matchingTag) return matchingTag.name;

  const commitsAfterTag = allCommitsInOrder.filter((c) => {
    const cDate = new Date(c.commit.committer.date);
    return cDate > relevantTag.date && cDate <= commitDate;
  });

  const incrementalIndex = commitsAfterTag.length;
  const tagWithoutV = relevantTag.name.replace(/^v/, "");
  const versionParts = tagWithoutV.split(".");
  const major = parseInt(versionParts[0]) || 1;
  const minor = parseInt(versionParts[1]) || 0;

  // Every 15 commits = new minor version
  // Major version only changes via git tags
  const newMinor = minor + Math.floor(incrementalIndex / 15);
  const newPatch = incrementalIndex % 15;

  return `v${major}.${newMinor}.${newPatch}`;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "longOffset",
  });
}

function formatStats(stats) {
  if (!stats) return "";
  const parts = [];
  if (stats.additions > 0) parts.push(`+${stats.additions}`);
  if (stats.deletions > 0) parts.push(`-${stats.deletions}`);
  if (parts.length > 0) return `${parts.join(" ")} lines`;
  return "";
}

async function fetchGitHubTimeline() {
  console.log("🚀 Fetching timeline from GitHub API (INCREMENTAL MODE)...");
  console.log(`📁 Repository: ${GITHUB_OWNER}/${GITHUB_REPO}`);

  // Get last commit date from existing timeline
  const lastCommitDate = getLastCommitDate();
  const sinceParam = lastCommitDate ? { since: lastCommitDate } : {};

  try {
    // Fetch branches
    console.log("🌿 Fetching all branches...");
    const branches = await octokit.paginate(octokit.rest.repos.listBranches, {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      per_page: 100,
    });
    console.log(`✅ Found ${branches.length} branches`);

    // Fetch NEW commits only
    console.log(
      lastCommitDate
        ? `📦 Fetching commits since ${lastCommitDate}...`
        : "📦 Fetching all commits (first run)..."
    );

    const allCommits = [];
    const seenShas = new Set();
    const commitToBranches = new Map();

    for (const branch of branches) {
      console.log(`📦 Fetching commits from branch: ${branch.name}`);
      try {
        const branchCommits = await octokit.paginate(octokit.rest.repos.listCommits, {
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          sha: branch.name,
          per_page: 100,
          ...sinceParam, // Only fetch commits since last update
        });

        branchCommits.forEach((commit) => {
          if (!commitToBranches.has(commit.sha)) {
            commitToBranches.set(commit.sha, []);
          }
          commitToBranches.get(commit.sha).push(branch.name);

          if (!seenShas.has(commit.sha)) {
            commit._branchFound = branch.name;
            allCommits.push(commit);
            seenShas.add(commit.sha);
          }
        });

        console.log(`   ✅ Found ${branchCommits.length} new commits on ${branch.name}`);
      } catch (error) {
        console.warn(`   ⚠️  Could not fetch commits from branch ${branch.name}: ${error.message}`);
      }
    }

    console.log(`📦 Total new commits found: ${allCommits.length}`);

    // If no new commits, we're done!
    if (allCommits.length === 0) {
      console.log("✅ Timeline is already up to date!");
      return;
    }

    // Fetch PRs for new commits
    console.log("🔄 Fetching pull requests...");
    const pulls = await octokit.paginate(octokit.rest.pulls.list, {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      state: "all",
      sort: "created",
      direction: "desc",
      per_page: 100,
    });

    const prCommitsMap = {};
    for (const pr of pulls) {
      try {
        const prCommits = await octokit.paginate(octokit.rest.pulls.listCommits, {
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          pull_number: pr.number,
          per_page: 100,
        });

        prCommits.forEach((commit) => {
          prCommitsMap[commit.sha] = pr;
        });
      } catch (error) {
        console.warn(`   ⚠️  Could not fetch commits for PR #${pr.number}`);
      }
    }

    // Get detailed commit stats
    console.log("📊 Fetching detailed commit stats...");
    const detailedCommits = [];

    for (let i = 0; i < allCommits.length; i++) {
      const commit = allCommits[i];
      console.log(
        `📊 Getting stats for commit ${i + 1}/${allCommits.length}: ${commit.sha.substring(0, 7)}`
      );

      try {
        const { data: detailedCommit } = await octokit.rest.repos.getCommit({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          ref: commit.sha,
        });

        detailedCommit._branchFound = commit._branchFound;
        detailedCommit._allBranches = commitToBranches.get(commit.sha) || [];
        detailedCommits.push(detailedCommit);
      } catch (error) {
        console.warn(`⚠️  Could not fetch details for ${commit.sha.substring(0, 7)}`);
        commit._allBranches = commitToBranches.get(commit.sha) || [];
        detailedCommits.push(commit);
      }
    }

    // Get tags
    const tagsWithDates = await getTagsWithDates(octokit, GITHUB_OWNER, GITHUB_REPO);

    // Load existing timeline to merge
    const timelineFile = path.join(process.cwd(), "src", "data", "timeline-github.json");
    let existingEntries = [];

    if (fs.existsSync(timelineFile)) {
      const existingTimeline = JSON.parse(fs.readFileSync(timelineFile, "utf8"));
      existingEntries = existingTimeline.entries || [];
      console.log(`📝 Loaded ${existingEntries.length} existing timeline entries`);
    }

    // Process new commits
    const newEntries = detailedCommits.map((commit) => {
      const pr = findPRForCommit(prCommitsMap, commit);
      let branchName = pr ? pr.head.ref : commit._branchFound || "main";
      let finalBranchName = branchName;
      let branchMerged = null;
      let intoBranch = null;

      if (commit.parents && commit.parents.length > 1) {
        const message = commit.commit.message;
        const prMergeMatch = message.match(
          /Merge pull request.*?[/#](\d+).*?from.*?[:/]([^.\s/]+)/
        );
        const branchMergeMatch = message.match(/Merge branch '([^']+)' into (.+)/);

        if (prMergeMatch) {
          branchMerged = prMergeMatch[2];
          intoBranch = pr ? pr.base.ref : branchName;
        } else if (branchMergeMatch) {
          branchMerged = branchMergeMatch[1];
          intoBranch = branchMergeMatch[2];
        } else if (pr) {
          branchMerged = pr.head.ref;
          intoBranch = pr.base.ref;
        }

        if (branchMerged && !pr) {
          branchName = branchMerged;
        }
      }

      return {
        version: generateVersionForCommit(commit, detailedCommits, tagsWithDates),
        hash: commit.sha.substring(0, 7),
        message: (() => {
          let msg = commit.commit.message.split("\n")[0];
          msg = msg.replace(/^\[([^\]]+)\]\s*/, "");
          return msg.match(/[.!?]$/) ? msg : msg + ".";
        })(),
        date: commit.commit.committer.date,
        author: commit.commit.author.name,
        stats: {
          insertions: commit.stats?.additions || 0,
          deletions: commit.stats?.deletions || 0,
          files: commit.files?.length || 0,
        },
        type: determineTypeFromPR(pr, commit, branchName),
        branch: finalBranchName,
        branchDisplay: finalBranchName,
        branchMerged: branchMerged,
        intoBranch: intoBranch,
        isMerge: commit.parents && commit.parents.length > 1,
        prNumber: pr?.number,
        prTitle: pr?.title,
        bracketTags: extractBracketTags(commit.commit.message),
        formattedDate: formatDate(commit.commit.committer.date),
        statsText: formatStats(commit.stats),
        githubUrl: commit.html_url,
        allBranches: commit._allBranches || [],
      };
    });

    // Merge existing and new entries, sort by date, and deduplicate
    const allEntries = [...existingEntries, ...newEntries];
    const uniqueEntries = Array.from(
      new Map(allEntries.map((entry) => [entry.hash, entry])).values()
    );
    uniqueEntries.sort((a, b) => new Date(a.date) - new Date(b.date));

    // Create updated timeline
    const timeline = {
      generated: new Date().toISOString(),
      lastBuild: formatDate(new Date().toISOString()),
      source: "github-api-octokit",
      repository: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      currentBranch: "main",
      totalBranches: branches.length,
      branchesProcessed: branches.map((b) => b.name),
      entries: uniqueEntries,
    };

    // Save timeline
    const dataDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const githubTimelineFile = path.join(dataDir, "timeline-github.json");
    const mainTimelineFile = path.join(dataDir, "timeline.json");

    fs.writeFileSync(githubTimelineFile, JSON.stringify(timeline, null, 2));
    fs.writeFileSync(mainTimelineFile, JSON.stringify(timeline, null, 2));

    console.log(`✅ Timeline updated:`);
    console.log(`📁 ${githubTimelineFile}`);
    console.log(`📊 Added ${newEntries.length} new entries`);
    console.log(`📊 Total entries: ${timeline.entries.length}`);

    return timeline;
  } catch (error) {
    console.error("❌ Error fetching GitHub timeline:", error.message);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  fetchGitHubTimeline();
}

export { fetchGitHubTimeline };
