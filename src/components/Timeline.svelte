<script>
  export let timelineData;

  let showTimeline = false;

  function toggleTimeline() {
    showTimeline = !showTimeline;
  }
</script>

<section class="timeline-section">
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
      class="timeline-reveal"
      class:visible={showTimeline}
    >
      <div class="timeline-header">
        <h3>progress.log</h3>
        <p class="entry-count">{timelineData.entries.length} entries</p>
      </div>

      <ul class="timeline-entries space-y-2">
        {#each timelineData.entries as entry}
          <li
            class="timeline-entry"
            data-type={entry.type}
          >
            <div class="entry-meta">
              <span class="version">{entry.version}</span>
              <span class="branch-display">{entry.branchDisplay}</span>
              <span class="date">{entry.formattedDate}</span>
            </div>

            <div class="entry-content">
              <p class="message first-letter:capitalize text-gray-100 text-xs">
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
  {/if}
</section>
