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

function findPRForCommit(pulls, commitSha) {
  return pulls.find(
    (pr) =>
      pr.merge_commit_sha === commitSha ||
      pr.head.sha === commitSha ||
      (pr.commits && pr.commits.some((c) => c.sha === commitSha))
  );
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

    // Process commits into timeline entries
    console.log("🔄 Processing timeline entries...");
    const timeline = {
      generated: new Date().toISOString(),
      lastBuild: formatDate(new Date().toISOString()),
      source: "github-api",
      repository: `${GITHUB_OWNER}/${GITHUB_REPO}`,
      entries: detailedCommits.reverse().map((commit, index) => {
        const pr = findPRForCommit(pulls, commit.sha);
        const branchName = pr ? pr.head.ref : "main";

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
          type: determineTypeFromPR(pr, commit, branchName),
          branch: branchName,
          branchDisplay: branchName,
          isMerge: commit.parents && commit.parents.length > 1,
          prNumber: pr?.number,
          prTitle: pr?.title,
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
