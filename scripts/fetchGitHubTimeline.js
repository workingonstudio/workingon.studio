// scripts/fetchGitHubTimeline.js
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Load .env.local explicitly
dotenv.config({ path: ".env.local" });

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "YOURUSERNAME"; // Update this
const GITHUB_REPO = process.env.GITHUB_REPO || "YOURREPO";

if (!GITHUB_TOKEN) {
  console.error("❌ Please set GITHUB_TOKEN environment variable");
  console.log("💡 Get a token at: https://github.com/settings/tokens");
  console.log(
    "💡 Usage: GITHUB_TOKEN=your_token npm run timeline:fetch-github"
  );
  process.exit(1);
}

async function fetchFromGitHub(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "WorkingOn-Studio-Timeline",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

async function fetchAllPages(baseUrl, params = {}) {
  let allItems = [];
  let page = 1;
  const perPage = 100;

  while (true) {
    const url = new URL(baseUrl);
    Object.entries({ ...params, page, per_page: perPage }).forEach(
      ([key, value]) => {
        url.searchParams.append(key, value);
      }
    );

    console.log(`📄 Fetching page ${page}...`);
    const items = await fetchFromGitHub(url.toString());

    if (!items || items.length === 0) break;

    allItems = allItems.concat(items);

    if (items.length < perPage) break; // Last page
    page++;
  }

  return allItems;
}

function findPRForCommit(prCommitsMap, prMessageMap, commit) {
  // First try exact SHA match (most reliable)
  if (prCommitsMap[commit.sha]) {
    return prCommitsMap[commit.sha];
  }

  // If no SHA match, this commit probably isn't in any PR
  // Don't force a message match - let it stay as 'main'
  return null;
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

function generateVersion(commit, index, latestTag = "v1.0.0") {
  // If this commit message looks like a release, use that
  const message = commit.commit.message;
  const versionMatch = message.match(/^v?(\d+\.\d+\.\d+)/);
  if (versionMatch) {
    return versionMatch[1];
  }

  // Otherwise, auto-increment from latest tag
  const [major, minor, patch] = latestTag
    .replace("v", "")
    .split(".")
    .map(Number);
  return `v${major}.${minor}.${patch}.${index + 1}`;
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
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
  console.log("🚀 Fetching timeline from GitHub API...");
  console.log(`📁 Repository: ${GITHUB_OWNER}/${GITHUB_REPO}`);

  try {
    // Fetch all commits
    console.log("📦 Fetching commits...");
    const commits = await fetchAllPages(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits`
    );
    console.log(`✅ Found ${commits.length} commits`);

    // Fetch all pull requests to get branch context
    console.log("🔄 Fetching pull requests...");
    const pulls = await fetchAllPages(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls`,
      {
        state: "all",
        sort: "created",
        direction: "desc",
      }
    );
    console.log(`✅ Found ${pulls.length} pull requests`);

    // Fetch commits for each PR to build proper mapping
    console.log("📦 Fetching PR commit mappings...");
    const prCommitsMap = {};
    const prMessageMap = {};
    for (const pr of pulls) {
      console.log(`📦 Fetching commits for PR #${pr.number}: ${pr.title}`);
      try {
        const prCommits = await fetchFromGitHub(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls/${pr.number}/commits`
        );
        prCommits.forEach((commit) => {
          prCommitsMap[commit.sha] = pr;
          // Add message-based mapping with date for uniqueness
          const message = commit.commit.message.split("\n")[0];
          const author = commit.commit.author.name;
          const date = new Date(commit.commit.committer.date)
            .toISOString()
            .split("T")[0]; // Just date part
          const key = `${message}::${author}::${date}`;
          prMessageMap[key] = pr;
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

    // DEBUG: Show what commits were mapped to which PRs
    console.log("\n🔍 DEBUG: PR Commit Mappings:");
    Object.entries(prCommitsMap).forEach(([sha, pr]) => {
      console.log(
        `   ${sha.substring(0, 7)} -> PR #${pr.number} (${pr.head.ref})`
      );
    });

    // Collect all commits from draft PRs to include in timeline
    console.log("\n📦 Fetching draft PR commits for timeline inclusion...");
    const draftPRCommits = [];
    for (const pr of pulls) {
      if (pr.draft) {
        console.log(`📝 Including draft PR #${pr.number}: ${pr.title}`);
        try {
          const prCommits = await fetchFromGitHub(
            `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/pulls/${pr.number}/commits`
          );

          // Get detailed stats for each draft PR commit
          for (const commit of prCommits) {
            try {
              const detailedCommit = await fetchFromGitHub(
                `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits/${commit.sha}`
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
    }

    console.log(
      `✅ Found ${draftPRCommits.length} additional commits from draft PRs`
    );

    // DEBUG: Show first few entries in prCommitsMap with full SHAs
    console.log("\n🔍 DEBUG: First few entries in prCommitsMap (full SHAs):");
    Object.entries(prCommitsMap)
      .slice(0, 8)
      .forEach(([sha, pr]) => {
        console.log(`   "${sha}" -> ${pr.head.ref}`);
      });

    // Get detailed stats for each commit (this will be slower but more accurate)
    console.log("📊 Fetching detailed commit stats...");
    const detailedCommits = [];
    for (let i = 0; i < Math.min(commits.length, 50); i++) {
      // Limit to recent commits to avoid rate limiting
      const commit = commits[i];
      console.log(
        `📊 Getting stats for commit ${i + 1}/${Math.min(
          commits.length,
          50
        )}: ${commit.sha.substring(0, 7)}`
      );

      try {
        const detailedCommit = await fetchFromGitHub(
          `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/commits/${commit.sha}`
        );
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

    // DEBUG: Show which commits we're actually processing
    console.log("\n🔍 DEBUG: Commits Being Processed (including drafts):");
    uniqueCommits.forEach((commit, index) => {
      const pr = findPRForCommit(prCommitsMap, prMessageMap, commit);
      const branch = pr ? pr.head.ref : "main";
      const draftIndicator = commit._isDraftPR ? " [DRAFT]" : "";
      console.log(
        `   ${index + 1}. ${commit.sha.substring(0, 7)} - ${
          commit.commit.message.split("\n")[0]
        } (${branch})${draftIndicator}`
      );
    });

    // DEBUG: Show full SHAs of processed commits vs mapped commits
    console.log("\n🔍 DEBUG: Processed commit SHAs vs Mapped SHAs:");
    detailedCommits.slice(0, 5).forEach((commit, index) => {
      const inMap = prCommitsMap[commit.sha] ? "✅" : "❌";
      console.log(`   ${index + 1}. "${commit.sha}" ${inMap}`);
    });

    // Process commits into timeline entries
    console.log("🔄 Processing timeline entries...");
    const timeline = {
      generated: new Date().toISOString(),
      lastBuild: formatDate(new Date().toISOString()),
      source: "github-api",
      repository: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      entries: uniqueCommits.reverse().map((commit, index) => {
        const pr = findPRForCommit(prCommitsMap, prMessageMap, commit);
        const branchName = pr ? pr.head.ref : "main";

        // Determine type, considering draft status
        let type = determineTypeFromPR(pr, commit, branchName);
        if (commit._isDraftPR && type === "feature") {
          type = "draft-feature"; // Special type for draft work
        }

        return {
          version: generateVersion(commit, index),
          hash: commit.sha.substring(0, 7),
          message: commit.commit.message.split("\n")[0], // First line only
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
    if (error.message.includes("401")) {
      console.log(
        "💡 Check that your GITHUB_TOKEN is valid and has repo access"
      );
    }
    if (error.message.includes("404")) {
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
