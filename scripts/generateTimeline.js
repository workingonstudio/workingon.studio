// scripts/generateTimeline.js
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function parseStats(statsLine) {
  if (!statsLine) return { insertions: 0, deletions: 0, files: 0 };

  const insertMatch = statsLine.match(/(\d+) insertion/);
  const deleteMatch = statsLine.match(/(\d+) deletion/);
  const fileMatch = statsLine.match(/(\d+) files? changed/);

  return {
    insertions: insertMatch ? parseInt(insertMatch[1]) : 0,
    deletions: deleteMatch ? parseInt(deleteMatch[1]) : 0,
    files: fileMatch ? parseInt(fileMatch[1]) : 0,
  };
}

function getBranchForCommit(hash) {
  try {
    // First, try to find branches that contain this commit
    const branchOutput = execSync(
      `git branch --contains ${hash} --format="%(refname:short)"`,
      { encoding: "utf8" }
    ).trim();

    if (branchOutput) {
      const branches = branchOutput
        .split("\n")
        .filter((branch) => branch.trim());

      // If commit is on main/master, prefer that
      if (branches.includes("main")) return "main";
      if (branches.includes("master")) return "master";

      // Otherwise, return the first non-main branch
      const featureBranches = branches.filter(
        (b) => b !== "main" && b !== "master"
      );
      if (featureBranches.length > 0) return featureBranches[0];

      return branches[0] || "main";
    }

    // Fallback: try to get current branch at time of commit
    const currentBranch = execSync("git branch --show-current", {
      encoding: "utf8",
    }).trim();
    return currentBranch || "main";
  } catch (error) {
    console.warn(
      `Could not determine branch for commit ${hash}:`,
      error.message
    );
    return "main";
  }
}

function determineEntryType(message, isMerge, branchName) {
  if (isMerge) {
    return "merge";
  }

  if (branchName && branchName !== "main" && branchName !== "master") {
    return "feature";
  }

  return "commit";
}

function extractGitHistory() {
  try {
    // Get the latest tag
    const latestTag = execSync("git describe --tags --abbrev=0", {
      encoding: "utf8",
    }).trim();

    // Get all commits since the tag
    const gitLogOutput = execSync(
      `git log ${latestTag}..HEAD --format="%H|%s|%ci|%an|%P" --shortstat --reverse`,
      { encoding: "utf8" }
    );

    // Also get the tag commit itself
    const tagCommitOutput = execSync(
      `git log ${latestTag} -1 --format="%H|%s|%ci|%an|%P" --shortstat`,
      { encoding: "utf8" }
    );

    const commits = [];
    let commitCount = 0;

    // Parse the tag commit first
    const tagLines = tagCommitOutput.split("\n");
    const tagCommitLine = tagLines[0];
    if (tagCommitLine) {
      const [hash, message, date, author, parents] = tagCommitLine.split("|");
      const statsLine = tagLines.find(
        (line) => line.includes("insertion") || line.includes("deletion")
      );

      commits.push({
        version: latestTag,
        hash: hash.substring(0, 7),
        message: message,
        date: new Date(date).toISOString(),
        author: author,
        stats: parseStats(statsLine),
        type: "release",
        branch: "main",
        branchDisplay: "main",
        isMerge: false,
      });
    }

    // Parse commits since tag
    const lines = gitLogOutput.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line && line.includes("|")) {
        const [hash, message, date, author, parents] = line.split("|");

        // Check if this is a merge commit
        const parentHashes = parents ? parents.split(" ").filter((p) => p) : [];
        const isMerge = parentHashes.length > 1;

        // Get actual branch for this commit
        const branchName = getBranchForCommit(hash);
        const entryType = determineEntryType(message, isMerge, branchName);

        // Look for stats line
        let statsLine = "";
        for (let j = i + 1; j < lines.length && j < i + 5; j++) {
          if (
            lines[j] &&
            (lines[j].includes("insertion") || lines[j].includes("deletion"))
          ) {
            statsLine = lines[j];
            break;
          }
        }

        commitCount++;
        const version = `${latestTag}.${commitCount}`;

        commits.push({
          version: version,
          hash: hash.substring(0, 7),
          message: message,
          date: new Date(date).toISOString(),
          author: author,
          stats: parseStats(statsLine),
          type: entryType,
          branch: branchName,
          branchDisplay: branchName,
          isMerge: isMerge,
        });
      }
    }

    return commits;
  } catch (error) {
    console.error("Error extracting git history:", error);
    return [];
  }
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
  const parts = [];
  if (stats.insertions > 0) parts.push(`+${stats.insertions}`);
  if (stats.deletions > 0) parts.push(`-${stats.deletions}`);
  if (parts.length > 0) return `${parts.join(" ")} lines`;
  return "";
}

function generateTimeline() {
  // Check if we have existing GitHub timeline data
  const githubTimelineFile = path.join(
    process.cwd(),
    "src",
    "data",
    "timeline-github.json"
  );

  if (fs.existsSync(githubTimelineFile)) {
    console.log("📄 Using existing GitHub timeline data");

    try {
      const githubData = JSON.parse(
        fs.readFileSync(githubTimelineFile, "utf8")
      );

      // Update the lastBuild time to current
      githubData.lastBuild = formatDate(new Date().toISOString());
      githubData.generated = new Date().toISOString();

      // Copy to main timeline file so component can use it
      const mainTimelineFile = path.join(
        process.cwd(),
        "src",
        "data",
        "timeline.json"
      );
      fs.writeFileSync(mainTimelineFile, JSON.stringify(githubData, null, 2));

      console.log("✅ GitHub timeline data preserved and updated");
      console.log(`📊 ${githubData.entries.length} entries from GitHub API`);

      return githubData;
    } catch (error) {
      console.warn("⚠️  Could not read GitHub timeline data:", error.message);
      console.log("📄 Falling back to local git generation");
    }
  }

  // Fall back to local git timeline generation
  console.log("📄 Generating timeline from local git history");

  const commits = extractGitHistory();

  const timeline = {
    generated: new Date().toISOString(),
    lastBuild: formatDate(new Date().toISOString()),
    source: "local-git",
    entries: commits.map((commit) => ({
      ...commit,
      formattedDate: formatDate(commit.date),
      statsText: formatStats(commit.stats),
    })),
  };

  // Ensure the data directory exists
  const dataDir = path.join(process.cwd(), "src", "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the timeline data
  const timelineFile = path.join(dataDir, "timeline.json");
  fs.writeFileSync(timelineFile, JSON.stringify(timeline, null, 2));

  console.log(
    `✅ Generated local timeline with ${timeline.entries.length} entries`
  );
  console.log(`📝 Written to: ${timelineFile}`);

  return timeline;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTimeline();
}

export { generateTimeline };
