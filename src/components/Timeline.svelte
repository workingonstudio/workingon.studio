<script>
  export let timelineData;
  let showTimeline = false;

  function toggleTimeline() {
    showTimeline = !showTimeline;
  }

  // Get the latest version - simplified logic
  $: currentVersion = (() => {
    if (!timelineData?.entries || timelineData.entries.length === 0) {
      return "v1.0.0";
    }

    // Get the very last entry (highest version)
    const latestEntry = timelineData.entries[timelineData.entries.length - 1];
    return latestEntry?.version || "v1.0.0";
  })();

  // Group entries by date
  function groupByDate(entries) {
    if (!entries) return [];

    const groups = {};

    entries.forEach((entry) => {
      // Extract just the date part (without time)
      const dateOnly = entry.formattedDate.split(" at ")[0];

      if (!groups[dateOnly]) {
        groups[dateOnly] = [];
      }
      groups[dateOnly].push(entry);
    });

    // Convert to array and sort by date (newest first)
    return Object.entries(groups)
      .map(([date, entries]) => ({
        date,
        entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)), // Sort commits within date: newest first (latest time at top)
      }))
      .sort(
        (a, b) => new Date(b.entries[0].date) - new Date(a.entries[0].date) // Sort date groups: newest first
      );
  }

  $: groupedEntries = groupByDate(timelineData?.entries);
</script>

<section class="timeline-section space-y-12">
  <div class="space-y-1">
    <div>{currentVersion}</div>
    <button
      class="last-built-trigger cursor-help truncate text-left"
      on:click={toggleTimeline}
      aria-expanded={showTimeline}
    >
      <span class="capitalize sm:normal-case">
        <span class="hidden sm:inline-block">Last</span>
        updated: {timelineData?.lastBuild || "Loading..."}
      </span>
    </button>
    <p class="truncate">
      Repo
      <span class="hidden sm:inline-block">sitory</span>
      :
      <a href="https://github.com/prmack/workingon.studio" class="underline hover:text-gray-100">
        https://github.com/prmack/workingon.studio
      </a>
    </p>
  </div>

  <!-- Always render timeline content, but hide it when not shown -->
  <div class="timeline-reveal group space-y-12 {showTimeline ? '' : 'invisible h-0 overflow-hidden'}">
    <div class="timeline-header">
      <h2 class="font-display inline-block cursor-default text-base text-gray-100">
        progress
        <span
          class="text-shadow-glow motion-safe:animate-flicker sm:group-hover:text-shadow-glow sm:group-hover:motion-safe:animate-flicker text-xs text-yellow-300 sm:text-gray-500 sm:text-shadow-none sm:group-hover:text-yellow-300 sm:motion-safe:animate-none"
        >
          .log
        </span>
      </h2>
    </div>

    <div class="timeline-groups mb-6 space-y-6">
      {#each groupedEntries as group}
        <div class="date-group">
          <h3 class="date-header mb-3 py-1 font-mono text-xs text-gray-400 uppercase">
            {group.date}
          </h3>

          <ul class="timeline-entries space-y-6">
            {#each group.entries as entry}
              <li class="timeline-entry space-y-2" data-type={entry.type}>
                <div class="entry-meta flex flex-row justify-between text-[10px] text-gray-600">
                  <span class="version-debug">
                    {entry.version}
                  </span>
                  <span class="time">
                    {entry.formattedDate.split(" at ")[1]}
                  </span>
                </div>

                <div class="entry-content space-y-1">
                  {#if entry.branchMerged && entry.intoBranch}
                    <p class="message text-xs text-gray-100">
                      <span class="merge-info">
                        <span class="merged-branch">
                          {entry.branchDisplay === entry.branchMerged ? entry.intoBranch : entry.branchDisplay}
                        </span>
                        <span class="merge-arrow text-yellow-300">←</span>
                        <span class="into-branch">{entry.branchMerged}</span>
                      </span>
                    </p>
                  {:else}
                    <p class="text-xs/relaxed text-gray-100 first-letter:capitalize">
                      {entry.message}
                    </p>
                  {/if}
                  {#if entry.branchMerged && entry.intoBranch}{:else}
                    <span class="branch-display">{entry.branchDisplay}</span>
                  {/if}
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
