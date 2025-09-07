<script>
  import { DateTime } from "luxon";
  export let timelineData;
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

<section class="timeline-section max-w-md space-y-12 mt-32">
  <div class="timeline-reveal group space-y-12">
    <div class="timeline-groups space-y-6 mb-6">
      {#each groupedEntries as group}
        <div class="date-group">
          <h3 class="date-header text-xs text-gray-400 font-mono mb-3 py-1">
            {group.date}
          </h3>

          <ul class="timeline-entries space-y-6">
            {#each group.entries as entry}
              <li
                class="timeline-entry space-y-2"
                data-type={entry.type}
              >
                <div
                  class="entry-meta flex flex-row justify-between text-gray-600 text-[10px]"
                >
                  <span class="version-debug">
                    {entry.version}
                  </span>
                  <span class="time">
                    {DateTime.fromISO(entry.date).toFormat("TT ZZ")}
                  </span>
                </div>

                <div class="entry-content space-y-1">
                  {#if entry.branchMerged && entry.intoBranch}
                    <p class="message text-gray-100 text-xs">
                      <span class="merge-info">
                        <span class="merged-branch"
                          >{entry.branchDisplay === entry.branchMerged
                            ? entry.intoBranch
                            : entry.branchDisplay}</span
                        >
                        <span class="merge-arrow text-yellow-300">←</span>
                        <span class="into-branch">{entry.branchMerged}</span>
                      </span>
                    </p>
                  {:else}
                    <p
                      class="first-letter:capitalize text-gray-100 text-xs/relaxed"
                    >
                      {entry.message}
                    </p>
                  {/if}
                  {#if entry.branchMerged && entry.intoBranch}{:else}
                    <span class="branch-display text-gray-500 text-[11px]"
                      >{entry.branchDisplay}</span
                    >
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
