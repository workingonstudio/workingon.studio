<script>
  export let timelineData;
  let showTimeline = false;

  function toggleTimeline() {
    showTimeline = !showTimeline;
  }

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
      .map(([date, entries]) => ({ date, entries }))
      .sort(
        (a, b) => new Date(b.entries[0].date) - new Date(a.entries[0].date)
      );
  }

  $: groupedEntries = groupByDate(timelineData?.entries);
</script>

<section class="timeline-section space-y-12">
  <button
    class="last-built-trigger"
    on:click={toggleTimeline}
    aria-expanded={showTimeline}
  >
    <span class="build-info">
      Last built: {timelineData?.lastBuild || "Loading..."}
    </span>
  </button>

  {#if showTimeline && timelineData}
    <div
      class="timeline-reveal group space-y-12"
      class:visible={showTimeline}
    >
      <div class="timeline-header">
        <h2
          class="text-base text-gray-100 font-display cursor-default inline-block"
        >
          progress<span
            class="text-gray-500 text-xs group-hover:text-yellow-300 group-hover:text-shadow-glow group-hover:motion-safe:animate-flicker"
            >.log</span
          >
        </h2>
      </div>

      <div class="timeline-groups space-y-6">
        {#each groupedEntries as group}
          <div class="date-group">
            <h3
              class="date-header text-sm text-gray-400 font-display mb-3 sticky top-0 bg-gray-950 py-1"
            >
              {group.date}
            </h3>

            <ul class="timeline-entries space-y-2 ml-4">
              {#each group.entries as entry}
                <li
                  class="timeline-entry"
                  data-type={entry.type}
                >
                  <div class="entry-meta">
                    <span class="version">{entry.version}</span>
                    <span class="branch-display">{entry.branchDisplay}</span>
                    <span class="time text-gray-500 text-xs">
                      {entry.formattedDate.split(" at ")[1]}
                    </span>
                  </div>

                  <div class="entry-content">
                    <p
                      class="message first-letter:capitalize text-gray-100 text-xs"
                    >
                      {entry.message}
                    </p>

                    {#if entry.statsText}
                      <span class="stats">{entry.statsText}</span>
                    {/if}
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>
