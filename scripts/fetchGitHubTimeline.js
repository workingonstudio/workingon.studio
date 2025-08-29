// scripts/fetchGitHubTimeline.js
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Octokit } from "@octokit/rest";

// Load .env.local explicitly
dotenv.config({ path: ".env.local" });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "prmack";
const GITHUB_REPO = process.env.GITHUB_REPO || "WorkingOn.studio";

if (!GITHUB_TOKEN) {
  console.error("❌ Please set GITHUB_TOKEN environment variable");
  console.log("💡 Get a token at: https://github.com/settings/tokens");
  console.log(
    "💡 Usage: GITHUB_TOKEN=your_token npm run timeline:fetch-github"
  );
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

function determineTypeFromPR(pr, commit, branchName) {
  if (commit.parents && commit.parents.length > 1) {
    return "merge";
  }

  if (pr) {
    // It was part of a PR, so likely a feature
    return "feature";
  }

  // Check commit message for patterns
  const message = commit.commit.message.toLowerCase();
  if (
    message.includes("release") ||
    message.includes("version") ||
    message.match(/^v\d+\./)
  ) {
    return "release";
  }

  if (branchName && branchName !== "main" && branchName !== "master") {
    return "feature";
  }

  return "commit";
}

// Add this function to get tags with their commit dates
async function getTagsWithDates(octokit, owner, repo) {
  try {
    const tags = await octokit.paginate(octokit.rest.repos.listTags, {
      owner: owner,
      repo: repo,
      per_page: 100,
    });

    // Get commit details for each tag to get the date
    const tagsWithDates = [];
    for (const tag of tags) {
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
        console.warn(`Could not fetch commit for tag ${tag.name}`);
      }
    }

    // Sort by date (oldest first)
    tagsWithDates.sort((a, b) => a.date - b.date);

    console.log(
      "🏷️  Tags with dates:",
      tagsWithDates.map((t) => `${t.name} (${t.date.toISOString()})`)
    );

    return tagsWithDates;
  } catch (error) {
    console.warn(`Could not fetch tags with dates: ${error.message}`);
    return [{ name: "v1.0.0", date: new Date(0) }]; // Default fallback
  }
}

// Modified version generation function
function generateVersionForCommit(commit, allCommitsInOrder, tagsWithDates) {
  // If this commit message looks like a release, use that
  const message = commit.commit.message;
  const versionMatch = message.match(/^v?(\d+\.\d+\.\d+)/);
  if (versionMatch) {
    return `v${versionMatch[1]}`;
  }

  const commitDate = new Date(commit.commit.committer.date);

  // Find which tag this commit came after
  let relevantTag = null;
  for (let i = tagsWithDates.length - 1; i >= 0; i--) {
    if (commitDate > tagsWithDates[i].date) {
      relevantTag = tagsWithDates[i];
      break;
    }
  }

  // If no tag found, use default
  if (!relevantTag) {
    relevantTag = { name: "v1.0.0", date: new Date(0) };
  }

  // Count commits since this tag
  const commitsAfterTag = allCommitsInOrder.filter((c) => {
    const cDate = new Date(c.commit.committer.date);
    return cDate > relevantTag.date && cDate <= commitDate;
  });

  const incrementalIndex = commitsAfterTag.length;

  // Extract version parts from the relevant tag
  const tagWithoutV = relevantTag.name.replace("v", "");
  const [major, minor] = tagWithoutV.split(".").map(Number);

  const newVersion = `v${major}.${minor}.${incrementalIndex}`;
  console.log(
    `🔢 Commit ${commit.sha.substring(
      0,
      7
    )} (${commitDate.toISOString()}) -> after tag ${
      relevantTag.name
    } -> ${newVersion}`
  );

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
    // Fetch all commits using Octokit pagination
    console.log("📦 Fetching commits...");
    const commits = await octokit.paginate(octokit.rest.repos.listCommits, {
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      per_page: 100,
    });
    console.log(`✅ Found ${commits.length} commits`);

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
        const prCommits = await octokit.paginate(
          octokit.rest.pulls.listCommits,
          {
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            pull_number: pr.number,
            per_page: 100,
          }
        );

        prCommits.forEach((commit) => {
          prCommitsMap[commit.sha] = pr;
        });

        console.log(
          `   ✅ Mapped ${prCommits.length} commits to ${pr.head.ref}`
        );
      } catch (error) {
        console.warn(
          `   ⚠️  Could not fetch commits for PR #${pr.number}: ${error.message}`
        );
      }
    }

    console.log(
      `✅ Total commit-to-PR mappings: ${Object.keys(prCommitsMap).length}`
    );

    // Collect commits from draft PRs for timeline inclusion
    console.log("\n📦 Fetching draft PR commits for timeline inclusion...");
    const draftPRCommits = [];

    for (const pr of pulls.filter((pr) => pr.draft)) {
      console.log(`📝 Including draft PR #${pr.number}: ${pr.title}`);
      try {
        const prCommits = await octokit.paginate(
          octokit.rest.pulls.listCommits,
          {
            owner: GITHUB_OWNER,
            repo: GITHUB_REPO,
            pull_number: pr.number,
            per_page: 100,
          }
        );

        // Get detailed stats for each draft PR commit
        for (const commit of prCommits) {
          try {
            const { data: detailedCommit } = await octokit.rest.repos.getCommit(
              {
                owner: GITHUB_OWNER,
                repo: GITHUB_REPO,
                ref: commit.sha,
              }
            );

            // Mark as draft work
            detailedCommit._isDraftPR = true;
            detailedCommit._prNumber = pr.number;
            detailedCommit._prTitle = pr.title;
            draftPRCommits.push(detailedCommit);
          } catch (error) {
            console.warn(
              `   ⚠️  Could not fetch details for draft commit ${commit.sha.substring(
                0,
                7
              )}`
            );
          }
        }

        console.log(
          `   ✅ Added ${prCommits.length} draft commits from ${pr.head.ref}`
        );
      } catch (error) {
        console.warn(
          `   ⚠️  Could not fetch draft PR commits: ${error.message}`
        );
      }
    }

    console.log(
      `✅ Found ${draftPRCommits.length} additional commits from draft PRs`
    );

    // Get detailed stats for recent commits (limit to avoid rate limiting)
    console.log("📊 Fetching detailed commit stats...");
    const detailedCommits = [];
    const recentCommits = commits.slice(0, Math.min(commits.length, 50));

    for (let i = 0; i < recentCommits.length; i++) {
      const commit = recentCommits[i];
      console.log(
        `📊 Getting stats for commit ${i + 1}/${
          recentCommits.length
        }: ${commit.sha.substring(0, 7)}`
      );

      try {
        const { data: detailedCommit } = await octokit.rest.repos.getCommit({
          owner: GITHUB_OWNER,
          repo: GITHUB_REPO,
          ref: commit.sha,
        });
        detailedCommits.push(detailedCommit);
      } catch (error) {
        console.warn(
          `⚠️  Could not fetch details for ${commit.sha.substring(0, 7)}: ${
            error.message
          }`
        );
        detailedCommits.push(commit); // Use basic commit data
      }
    }

    // Merge main branch commits with draft PR commits
    const allCommits = [...detailedCommits, ...draftPRCommits];

    // Remove duplicates (in case draft commits are also in main branch)
    const uniqueCommits = allCommits.filter(
      (commit, index, arr) =>
        arr.findIndex((c) => c.sha === commit.sha) === index
    );

    // Sort by commit date (newest first for processing, will reverse later)
    uniqueCommits.sort(
      (a, b) =>
        new Date(b.commit.committer.date) - new Date(a.commit.committer.date)
    );

    console.log(
      `📊 Total unique commits to process: ${uniqueCommits.length} (${detailedCommits.length} main + ${draftPRCommits.length} draft)`
    );

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
    const tagsWithDates = await getTagsWithDates(
      octokit,
      GITHUB_OWNER,
      GITHUB_REPO
    );

    // DEBUG: Show which commits we're processing
    console.log("\n🔍 DEBUG: Commits Being Processed (including drafts):");
    uniqueCommits.forEach((commit, index) => {
      const pr = findPRForCommit(prCommitsMap, commit);
      const branch = pr ? pr.head.ref : currentBranch;
      const draftIndicator = commit._isDraftPR ? " [DRAFT]" : "";
      console.log(
        `   ${index + 1}. ${commit.sha.substring(0, 7)} - ${
          commit.commit.message.split("\n")[0]
        } (${branch})${draftIndicator}`
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
      entries: uniqueCommits.reverse().map((commit, index) => {
        const pr = findPRForCommit(prCommitsMap, commit);
        const branchName = pr ? pr.head.ref : currentBranch;

        // Determine type, considering draft status
        let type = determineTypeFromPR(pr, commit, branchName);
        if (commit._isDraftPR && type === "feature") {
          type = "draft-feature"; // Special type for draft work
        }

        // Handle merge commit branch information
        // Handle merge commit branch information
        let branchMerged = null;
        let intoBranch = null;
        if (commit.parents && commit.parents.length > 1) {
          // This is a merge commit
          const message = commit.commit.message;

          // Try to parse branch name from commit message
          // Common patterns: "Merge pull request #X from branch-name"
          //                  "Merge branch 'branch-name' into target-branch"
          //                  "Merge pull request /branch-name"

          const prMergeMatch = message.match(
            /Merge pull request.*?\/([^.\s]+)/
          );
          const branchMergeMatch = message.match(
            /Merge branch '([^']+)' into (.+)/
          );
          const simplePRMatch = message.match(
            /Merge pull request.*?from.*?\/([^.\s]+)/
          );

          if (branchMergeMatch) {
            // Direct branch merge: "Merge branch 'feature' into dev"
            branchMerged = branchMergeMatch[1];
            intoBranch = branchMergeMatch[2];
          } else if (prMergeMatch) {
            // PR merge: "Merge pull request /branch-name"
            branchMerged = prMergeMatch[1];
            // For PR merges, determine target from PR data or current branch context
            if (pr) {
              intoBranch = pr.base.ref;
            } else {
              // Fallback to the branch this commit appears to be on
              intoBranch = branchName;
            }
          } else if (simplePRMatch) {
            // GitHub PR merge: "Merge pull request #X from user/branch-name"
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
        }

        return {
          version: generateVersionForCommit(
            commit,
            uniqueCommits,
            tagsWithDates
          ),
          hash: commit.sha.substring(0, 7),
          message: (() => {
            const msg = commit.commit.message.split("\n")[0]; // First line only
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
          branch: branchName,
          branchDisplay: branchName,
          branchMerged: branchMerged,
          intoBranch: intoBranch,
          isMerge: commit.parents && commit.parents.length > 1,
          isDraft: commit._isDraftPR || false,
          prNumber: pr?.number || commit._prNumber,
          prTitle: pr?.title || commit._prTitle,
          formattedDate: formatDate(commit.commit.committer.date),
          statsText: formatStats(commit.stats),
          githubUrl: commit.html_url,
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
    console.log(`📊 ${timeline.entries.length} entries processed`);

    // Show a preview
    console.log("\n📋 Preview of recent entries:");
    timeline.entries.slice(-5).forEach((entry) => {
      console.log(`   ${entry.version} - ${entry.message} (${entry.branch})`);
    });

    return timeline;
  } catch (error) {
    console.error("❌ Error fetching GitHub timeline:", error.message);
    if (error.status === 401) {
      console.log(
        "💡 Check that your GITHUB_TOKEN is valid and has repo access"
      );
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
