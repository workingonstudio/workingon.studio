// scripts/fetchGitHubTimeline.js
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Octokit } from "@octokit/rest";

// Load .env.local explicitly
dotenv.config({ path: ".env.local" });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "workingonstudio";
const GITHUB_REPO = process.env.GITHUB_REPO || "workingon.studio";

if (!GITHUB_TOKEN) {
  console.error("❌ Please set GITHUB_TOKEN environment variable");
  console.log("💡 Get a token at: https://github.com/settings/tokens");
  console.log("💡 Usage: GITHUB_TOKEN=your_token npm run timeline:fetch-github");
  process.exit(1);
}

// Initialize Octokit with authentication
const octokit = new Octokit({
  auth: GITHUB_TOKEN,
  userAgent: "WorkingOn-Studio-Timeline",
});

function findPRForCommit(prCommitsMap, commit) {
  // Try exact SHA match (most reliable)
  return prCommitsMap[commit.sha] || null;
}

function extractBracketTags(message) {
  // Extract all tags in square brackets at the beginning of commit messages
  // Match patterns like "[TRANSPARENCY]", "[FEATURE]", "[HOTFIX] Fix bug", etc.
  const bracketMatches = message.match(/^\[([^\]]+)\]/);
  return bracketMatches ? [bracketMatches[1].toLowerCase()] : [];
}

function determineTypeFromPR(pr, commit, branchName) {
  const message = commit.commit.message;
  const messageLower = message.toLowerCase();

  // Extract bracket tags for story classification
  const bracketTags = extractBracketTags(message);

  // Use bracket tags to determine entry type
  if (bracketTags.includes("transparency")) {
    return "transparency";
  }

  if (bracketTags.includes("release")) {
    return "release";
  }

  if (bracketTags.includes("hotfix")) {
    return "hotfix";
  }

  if (bracketTags.includes("docs")) {
    return "docs";
  }

  if (bracketTags.includes("feature")) {
    return "feature";
  }

  // Fallback to existing logic for untagged commits
  if (commit.parents && commit.parents.length > 1) {
    return "merge";
  }

  if (pr) {
    return "feature";
  }

  // Check commit message for patterns
  if (
    messageLower.includes("release") ||
    messageLower.includes("version") ||
    messageLower.match(/^v\d+\./)
  ) {
    return "release";
  }

  if (branchName && branchName !== "main" && branchName !== "master") {
    return "feature";
  }

  return "commit";
}

// FIXED: Get tags with their commit dates - VERSION TAGS ONLY
async function getTagsWithDates(octokit, owner, repo) {
  try {
    const tags = await octokit.paginate(octokit.rest.repos.listTags, {
      owner: owner,
      repo: repo,
      per_page: 100,
    });

    // Filter to only version tags (v followed by numbers and dots)
    const versionTags = tags.filter((tag) => /^v\d+\.\d+\.\d+$/.test(tag.name));

    console.log(`📦 Found ${tags.length} total tags, ${versionTags.length} version tags`);

    // If no version tags exist, return empty array instead of fake fallback
    if (versionTags.length === 0) {
      console.log("📦 No version tags found in repository");
      return [];
    }

    // Get commit details for each version tag to get the date
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

    // Sort by date (oldest first)
    tagsWithDates.sort((a, b) => a.date - b.date);

    console.log(
      "🏷️  Version tags with dates:",
      tagsWithDates.map((t) => `${t.name} (${t.date.toISOString()})`)
    );

    return tagsWithDates;
  } catch (error) {
    console.warn(`Could not fetch tags with dates: ${error.message}`);
    return []; // Return empty array instead of fake fallback
  }
}

// FIXED: Version generation with proper fallback when no tags exist
function generateVersionForCommit(commit, allCommitsInOrder, tagsWithDates) {
  // If this commit message looks like a release, use that
  const message = commit.commit.message;
  const versionMatch = message.match(/^v?(\d+\.\d+\.\d+)/);
  if (versionMatch) {
    return `v${versionMatch[1]}`;
  }

  const commitDate = new Date(commit.commit.committer.date);

  // If no tags exist, use simple incremental versioning from v1.0.0
  if (tagsWithDates.length === 0) {
    const commitIndex = allCommitsInOrder.findIndex((c) => c.sha === commit.sha);
    return `v1.0.${commitIndex + 1}`;
  }

  // Find which tag this commit came after (or is equal to)
  let relevantTag = null;

  for (let i = tagsWithDates.length - 1; i >= 0; i--) {
    if (commitDate >= tagsWithDates[i].date) {
      relevantTag = tagsWithDates[i];
      break;
    }
  }

  // If no relevant tag found, use the earliest tag as reference
  if (!relevantTag) {
    relevantTag = tagsWithDates[0];
  }

  // Special case: if this commit is exactly at a tag, return the tag version
  const matchingTag = tagsWithDates.find(
    (tag) => Math.abs(new Date(tag.date).getTime() - commitDate.getTime()) < 1000 // Within 1 second
  );

  if (matchingTag) {
    return matchingTag.name;
  }

  // Count commits since this tag (excluding the tag commit itself)
  const commitsAfterTag = allCommitsInOrder.filter((c) => {
    const cDate = new Date(c.commit.committer.date);
    return cDate > relevantTag.date && cDate <= commitDate;
  });

  const incrementalIndex = commitsAfterTag.length;

  // Safe parsing of version numbers
  const tagWithoutV = relevantTag.name.replace(/^v/, "");
  const versionParts = tagWithoutV.split(".");
  const major = parseInt(versionParts[0]) || 1;
  const minor = parseInt(versionParts[1]) || 0;
  const patch = parseInt(versionParts[2]) || 0;

  // Generate version: use tag's major.minor.patch + incremental count
  const newVersion = `v${major}.${minor}.${patch + incrementalIndex}`;

  return newVersion;
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
  console.log("🚀 Fetching timeline from GitHub API using Octokit...");
  console.log(`📁 Repository: ${GITHUB_OWNER}/${GITHUB_REPO}`);

  try {
    // FIXED: First, fetch all branches to get commits from all branches
    console.log("🌿 Fetching all branches...");
    const branches = await octokit.paginate(octokit.rest.repos.listBranches, {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      per_page: 100,
    });
    console.log(`✅ Found ${branches.length} branches: ${branches.map((b) => b.name).join(", ")}`);

    // FIXED: Fetch commits from ALL branches with better deduplication
    console.log("📦 Fetching commits from all branches...");
    const allCommits = [];
    const seenShas = new Set(); // Prevent duplicates
    const commitToBranches = new Map(); // Track which branches contain each commit

    for (const branch of branches) {
      console.log(`📦 Fetching commits from branch: ${branch.name}`);
      try {
        const branchCommits = await octokit.paginate(octokit.rest.repos.listCommits, {
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          sha: branch.name, // This is the key fix!
          per_page: 100,
        });

        // Track branches for each commit and filter duplicates
        branchCommits.forEach((commit) => {
          // Track which branches contain this commit
          if (!commitToBranches.has(commit.sha)) {
            commitToBranches.set(commit.sha, []);
          }
          commitToBranches.get(commit.sha).push(branch.name);

          // Only add to allCommits if we haven't seen it before
          if (!seenShas.has(commit.sha)) {
            // Add the FIRST branch we found it on (usually the most specific one)
            commit._branchFound = branch.name;
            allCommits.push(commit);
            seenShas.add(commit.sha);
          }
        });

        console.log(
          `   ✅ Found ${branchCommits.length} commits on ${branch.name} (${
            branchCommits.filter(
              (c) => !seenShas.has(c.sha) || commitToBranches.get(c.sha).includes(branch.name)
            ).length
          } new)`
        );
      } catch (error) {
        console.warn(`   ⚠️  Could not fetch commits from branch ${branch.name}: ${error.message}`);
      }
    }

    console.log(`📦 Total unique commits found: ${allCommits.length}`);

    // DEBUG: Show branch mapping for recent commits
    console.log("\n🔍 DEBUG: Recent commits and their branches:");
    allCommits.slice(-10).forEach((commit) => {
      const branchList = commitToBranches.get(commit.sha) || [];
      console.log(
        `   ${commit.sha.substring(0, 7)} - "${
          commit.commit.message.split("\n")[0]
        }" appears on: ${branchList.join(", ")}`
      );
    });

    // Fetch all pull requests using Octokit pagination
    console.log("🔄 Fetching pull requests...");
    const pulls = await octokit.paginate(octokit.rest.pulls.list, {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      state: "all",
      sort: "created",
      direction: "desc",
      per_page: 100,
    });
    console.log(`✅ Found ${pulls.length} pull requests`);

    // Build PR commit mappings
    console.log("📦 Building PR commit mappings...");
    const prCommitsMap = {};

    for (const pr of pulls) {
      console.log(`📦 Fetching commits for PR #${pr.number}: ${pr.title}`);
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

        console.log(`   ✅ Mapped ${prCommits.length} commits to ${pr.head.ref}`);
      } catch (error) {
        console.warn(`   ⚠️  Could not fetch commits for PR #${pr.number}: ${error.message}`);
      }
    }

    console.log(`✅ Total commit-to-PR mappings: ${Object.keys(prCommitsMap).length}`);

    // DEBUG: Show PR commit mappings
    console.log("\n🔍 DEBUG: PR Commit Mappings:");
    Object.entries(prCommitsMap).forEach(([sha, pr]) => {
      console.log(`   ${sha.substring(0, 7)} -> PR #${pr.number} (${pr.head.ref})`);
    });

    // Get detailed stats for commits (limit to avoid rate limiting)
    console.log("📊 Fetching detailed commit stats...");
    const detailedCommits = [];
    const recentCommits = allCommits;

    for (let i = 0; i < recentCommits.length; i++) {
      const commit = recentCommits[i];
      console.log(
        `📊 Getting stats for commit ${i + 1}/${
          allCommits.length
        }: ${commit.sha.substring(0, 7)} (${commit._branchFound})`
      );

      try {
        const { data: detailedCommit } = await octokit.rest.repos.getCommit({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          ref: commit.sha,
        });

        // Preserve branch information
        detailedCommit._branchFound = commit._branchFound;
        detailedCommit._allBranches = commitToBranches.get(commit.sha) || [];
        detailedCommits.push(detailedCommit);
      } catch (error) {
        console.warn(
          `⚠️  Could not fetch details for ${commit.sha.substring(0, 7)}: ${error.message}`
        );
        // Use basic commit data with branch info
        commit._branchFound = commit._branchFound;
        commit._allBranches = commitToBranches.get(commit.sha) || [];
        detailedCommits.push(commit);
      }
    }

    // Sort by commit date (newest first for processing, will reverse later)
    detailedCommits.sort(
      (a, b) => new Date(b.commit.committer.date) - new Date(a.commit.committer.date)
    );

    console.log(`📊 Total commits to process: ${detailedCommits.length}`);

    // Get current branch for version context
    let currentBranch = "main";
    try {
      const { data: repo } = await octokit.rest.repos.get({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
      });
      currentBranch = repo.default_branch;
    } catch (error) {
      console.warn('Could not determine default branch, using "main"');
    }

    // Get tags with their commit dates
    const tagsWithDates = await getTagsWithDates(octokit, GITHUB_OWNER, GITHUB_REPO);

    // DEBUG: Show which commits we're processing
    console.log("\n🔍 DEBUG: Commits Being Processed (from all branches):");
    detailedCommits.forEach((commit, index) => {
      const pr = findPRForCommit(prCommitsMap, commit);
      const branchFromPR = pr ? pr.head.ref : null;
      const branchFromDiscovery = commit._branchFound;
      const allBranches = commit._allBranches || [];
      const displayBranch = branchFromPR || branchFromDiscovery || currentBranch;

      console.log(
        `   ${index + 1}. ${commit.sha.substring(0, 7)} - ${
          commit.commit.message.split("\n")[0]
        } (found on: ${branchFromDiscovery}, all branches: ${allBranches.join(
          ", "
        )}, display: ${displayBranch})`
      );
    });

    // Process commits into timeline entries
    console.log("🔄 Processing timeline entries...");
    const timeline = {
      generated: new Date().toISOString(),
      lastBuild: formatDate(new Date().toISOString()),
      source: "github-api-octokit",
      repository: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      currentBranch: currentBranch,
      totalBranches: branches.length,
      branchesProcessed: branches.map((b) => b.name),
      entries: detailedCommits.reverse().map((commit, index) => {
        const pr = findPRForCommit(prCommitsMap, commit);

        // Use PR branch if available, otherwise use discovered branch
        let branchName = pr ? pr.head.ref : commit._branchFound || currentBranch;

        // This will be the final branch name for display (starts as branchName, may be overridden for merges)
        let finalBranchName = branchName;

        // Determine type, considering draft status
        let type = determineTypeFromPR(pr, commit, branchName);

        // Handle merge commit branch information
        let branchMerged = null;
        let intoBranch = null;
        if (commit.parents && commit.parents.length > 1) {
          // This is a merge commit
          const message = commit.commit.message;

          // Try to parse branch name from commit message
          const prMergeMatch = message.match(
            /Merge pull request.*?[/#](\d+).*?from.*?[:/]([^.\s/]+)/
          );
          const branchMergeMatch = message.match(/Merge branch '([^']+)' into (.+)/);
          const simplePRMatch = message.match(/Merge pull request.*?\/([^.\s]+)/);

          if (prMergeMatch) {
            // GitHub PR merge: "Merge pull request #123 from user/branch-name"
            branchMerged = prMergeMatch[2];
            if (pr) {
              intoBranch = pr.base.ref;
            } else {
              intoBranch = branchName;
            }
          } else if (branchMergeMatch) {
            // Direct branch merge: "Merge branch 'feature' into dev"
            branchMerged = branchMergeMatch[1];
            intoBranch = branchMergeMatch[2];
          } else if (simplePRMatch) {
            // Simple PR merge: "Merge pull request /branch-name"
            branchMerged = simplePRMatch[1];
            if (pr) {
              intoBranch = pr.base.ref;
            } else {
              intoBranch = branchName;
            }
          } else if (pr) {
            // Fallback to PR data if we have it
            branchMerged = pr.head.ref;
            intoBranch = pr.base.ref;
          }

          console.log(
            `🔀 Merge commit ${commit.sha.substring(0, 7)}: "${
              message.split("\n")[0]
            }" -> ${branchMerged} → ${intoBranch}`
          );

          // For merge commits from deleted branches, use the merged branch name as the display branch
          if (branchMerged && !pr) {
            branchName = branchMerged;
          }
        }

        return {
          version: generateVersionForCommit(commit, detailedCommits, tagsWithDates),
          hash: commit.sha.substring(0, 7),
          message: (() => {
            let msg = commit.commit.message.split("\n")[0]; // First line only

            // Remove bracket tags from display message for cleaner timeline
            msg = msg.replace(/^\[([^\]]+)\]\s*/, "");

            // Add period if not present and message doesn't end with other punctuation
            return msg.match(/[.!?]$/) ? msg : msg + ".";
          })(),
          date: commit.commit.committer.date,
          author: commit.commit.author.name,
          stats: {
            insertions: commit.stats?.additions || 0,
            deletions: commit.stats?.deletions || 0,
            files: commit.files?.length || 0,
          },
          type: type,
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
      }),
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Save the complete GitHub timeline
    const githubTimelineFile = path.join(dataDir, "timeline-github.json");
    fs.writeFileSync(githubTimelineFile, JSON.stringify(timeline, null, 2));

    // Also update the main timeline file
    const mainTimelineFile = path.join(dataDir, "timeline.json");
    fs.writeFileSync(mainTimelineFile, JSON.stringify(timeline, null, 2));

    console.log(`✅ GitHub timeline saved:`);
    console.log(`📁 ${githubTimelineFile}`);
    console.log(`📁 ${mainTimelineFile}`);
    console.log(
      `📊 ${timeline.entries.length} entries processed from ${timeline.totalBranches} branches`
    );

    // Show a preview with branch info
    console.log("\n📋 Preview of recent entries:");
    timeline.entries.slice(-10).forEach((entry) => {
      const tagDisplay = entry.bracketTags.length > 0 ? ` [${entry.bracketTags.join(", ")}]` : "";
      console.log(`   ${entry.version} - ${entry.message} (${entry.branch})${tagDisplay}`);
    });

    // Show branch summary
    console.log(`\n🌿 Branch Summary:`);
    const branchCounts = {};
    timeline.entries.forEach((entry) => {
      branchCounts[entry.branch] = (branchCounts[entry.branch] || 0) + 1;
    });
    Object.entries(branchCounts).forEach(([branch, count]) => {
      console.log(`   ${branch}: ${count} commits`);
    });

    return timeline;
  } catch (error) {
    console.error("❌ Error fetching GitHub timeline:", error.message);
    if (error.status === 401) {
      console.log("💡 Check that your GITHUB_TOKEN is valid and has repo access");
    }
    if (error.status === 404) {
      console.log("💡 Check that GITHUB_OWNER and GITHUB_REPO are correct");
    }
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  fetchGitHubTimeline();
}

export { fetchGitHubTimeline };
