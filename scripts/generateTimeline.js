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

function extractBranchFromRefs(refs) {
  if (!refs) return null;

  // Look for branch references (origin/branch-name or branch-name)
  const branchMatch = refs.match(/origin\/([^,\s]+)/);
  if (branchMatch) return branchMatch[1];

  // Look for local branch references
  const localBranchMatch = refs.match(/(?:^|\s)([^/\s,]+)(?:\s|,|$)/);
  if (localBranchMatch && !localBranchMatch[1].includes("HEAD")) {
    return localBranchMatch[1];
  }

  return null;
}

function getCurrentBranchForCommit(hash) {
  try {
    const branchOutput = execSync(`git branch --contains ${hash}`, {
      encoding: "utf8",
    });
    const branches = branchOutput
      .split("\n")
      .map((line) => line.replace(/^\*?\s+/, ""))
      .filter((branch) => branch && branch !== "main" && branch !== "master");

    return branches[0] || "main";
  } catch (error) {
    return "unknown";
  }
}

function determineEntryType(message, isMerge, branchName) {
  if (isMerge) {
    return "merge";
  }

  if (branchName && branchName !== "main" && branchName !== "master") {
    return "branch-commit";
  }

  // Check for common branch creation patterns in commit messages
  if (
    message.toLowerCase().includes("create") &&
    message.toLowerCase().includes("branch")
  ) {
    return "branch-creation";
  }

  return "commit";
}

function formatBranchDisplay(refs, branchName) {
  if (!refs) return branchName || "main";

  // Parse refs to find branch flow
  // Example: "HEAD -> meta-timeline-development, main" becomes "main -> meta-timeline-development"
  const refParts = refs.split(",").map((r) => r.trim());

  let fromBranch = "main";
  let toBranch = branchName;

  // Look for HEAD -> branch pattern
  const headMatch = refs.match(/HEAD -> ([^,]+)/);
  if (headMatch) {
    toBranch = headMatch[1];
  }

  // If we have multiple refs, assume the non-HEAD one is the source
  const otherRefs = refParts.filter(
    (ref) =>
      !ref.includes("HEAD") &&
      !ref.includes("origin/") &&
      ref.trim() !== toBranch
  );

  if (otherRefs.length > 0) {
    fromBranch = otherRefs[0].trim();
  }

  // Don't show arrow for main branch commits
  if (toBranch === "main" || toBranch === fromBranch) {
    return toBranch;
  }

  return `${fromBranch} -> ${toBranch}`;
}

function extractGitHistory() {
  try {
    // Get the latest tag (assuming v1.0 format)
    const latestTag = execSync("git describe --tags --abbrev=0", {
      encoding: "utf8",
    }).trim();

    // Get all commits since the tag, including merge commits and branch info
    const gitLogOutput = execSync(
      `git log ${latestTag}..HEAD --format="%H|%s|%ci|%an|%P" --shortstat --reverse`,
      { encoding: "utf8" }
    );

    // Also get the tag commit itself
    const tagCommitOutput = execSync(
      `git log ${latestTag} -1 --format="%H|%s|%ci|%an|%P" --shortstat`,
      { encoding: "utf8" }
    );

    // Get branch information for commits
    const branchInfoOutput = execSync(
      `git log ${latestTag}..HEAD --format="%H|%D" --reverse`,
      { encoding: "utf8" }
    );

    const commits = [];
    let commitCount = 0;

    // Parse branch info into a lookup map
    const branchInfo = new Map();
    const branchLines = branchInfoOutput.split("\n");
    for (const line of branchLines) {
      if (line && line.includes("|")) {
        const [hash, refs] = line.split("|");
        branchInfo.set(hash, refs.trim());
      }
    }

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

        // Check if this is a merge commit (has multiple parents)
        const parentHashes = parents ? parents.split(" ").filter((p) => p) : [];
        const isMerge = parentHashes.length > 1;

        // Determine branch info and type
        const refs = branchInfo.get(hash) || "";
        const branchName =
          extractBranchFromRefs(refs) || getCurrentBranchForCommit(hash);
        const entryType = determineEntryType(message, isMerge, branchName);

        // Look for stats line (next non-empty line that contains insertions/deletions)
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
          branchDisplay: formatBranchDisplay(refs, branchName),
          isMerge: isMerge,
          refs: refs,
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
  const commits = extractGitHistory();

  const timeline = {
    generated: new Date().toISOString(),
    lastBuild: formatDate(new Date().toISOString()),
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

  console.log(`✅ Generated timeline with ${timeline.entries.length} entries`);
  console.log(`📝 Written to: ${timelineFile}`);

  return timeline;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  generateTimeline();
}

export { generateTimeline };
