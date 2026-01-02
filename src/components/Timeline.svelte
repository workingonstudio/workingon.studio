<script>
  import { onMount, tick } from "svelte";
  import PageHeader from "./partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  export let timelineData;

  // State for pagination
  let visibleCount = 50;
  let isLoadingMore = false;
  let loadMoreTrigger;
  let observer;

  $: allEntries = timelineData?.entries || [];
  $: visibleEntries = allEntries.slice(-visibleCount);
  $: hasMore = visibleCount < allEntries.length;

  $: if (loadMoreTrigger && hasMore && !observer) {
    console.log("Setting up observer");
    observer = new IntersectionObserver(
      (entries) => {
        console.log("Intersection observed:", entries[0].isIntersecting);
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(loadMoreTrigger);
  }

  function loadMore() {
    console.log("loadMore called", { isLoadingMore, hasMore, visibleCount });
    if (isLoadingMore || !hasMore) return;

    isLoadingMore = true;

    setTimeout(() => {
      visibleCount += 50;
      isLoadingMore = false;
      console.log("Loaded more, new visibleCount:", visibleCount);
    }, 100);
  }

  // Cleanup when no more entries
  $: if (!hasMore && observer) {
    observer.disconnect();
    observer = null;
  }

  onMount(async () => {
    await tick(); // Wait for DOM to fully render
    console.log("After tick, loadMoreTrigger:", !!loadMoreTrigger);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });

  // Group entries by date
  function groupByDate(entries) {
    if (!entries) return [];

    const groups = {};

    entries.forEach((entry) => {
      const dateOnly = entry.formattedDate.split(" at ")[0];

      if (!groups[dateOnly]) {
        groups[dateOnly] = [];
      }
      groups[dateOnly].push(entry);
    });

    return Object.entries(groups)
      .map(([date, entries]) => ({
        date,
        entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date)),
      }))
      .sort((a, b) => new Date(b.entries[0].date) - new Date(a.entries[0].date));
  }

  $: groupedEntries = groupByDate(visibleEntries);

  function shortenText(text, maxLength = 30) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  }

  function getGitHubStats(timelineData) {
    const stats = {
      totalCommits: 0,
      totalMerges: 0,
      totalPRs: 0,
    };

    const uniquePRs = new Set();

    timelineData.entries.forEach((entry) => {
      if (entry.message.startsWith(":")) {
        entry.message = entry.message.replace(/^:\s*/, "");
      }

      stats.totalCommits++;

      if (entry.isMerge === true) {
        stats.totalMerges++;
      }

      if (entry.prNumber) {
        uniquePRs.add(entry.prNumber);
      }
    });

    stats.totalPRs = uniquePRs.size;

    return stats;
  }

  const result = getGitHubStats(timelineData);
</script>

<PageHeader>
  <h1>
    {result.totalCommits} commits. {result.totalMerges} merges. {result.totalPRs} pull requests. One rebase.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>This site is in a constant state of change. Tweaked to death, and improved. And here's the proof.</p>
  </div>
</PageHeader>

<section class="timeline-section flex max-w-2xl flex-col gap-12 lg:mx-2 2xl:mt-5 2xl:w-5xl">
  <div class="timeline-reveal group flex flex-col gap-12">
    <div class="timeline-groups flex flex-col gap-12">
      {#each groupedEntries as group}
        <div class="date-group">
          <div class="date-header">
            <div class="bg-surface border-surface-border flex flex-col rounded-lg border p-2">
              <iconify-icon icon="carbon:calendar" class="text-header size-4 text-base"></iconify-icon>
            </div>
            <h3>
              {group.date}
            </h3>
          </div>
          <ul class="timeline-entries flex flex-col gap-8">
            {#each group.entries as entry}
              <li class="timeline-entry space-y-2" data-type={entry.type}>
                <div class="entry-content">
                  {#if entry.branchMerged && entry.intoBranch}
                    <div class="entry">
                      <div class="flex flex-row items-center gap-3">
                        <div class="bg-surface-border size-2 rounded-full"></div>
                        <div
                          class="bg-surface text-xxs text-header border-surface-border flex flex-row items-center rounded-full border px-2 py-0.5"
                        >
                          {DateTime.fromISO(entry.date).toFormat("T")}
                        </div>
                      </div>
                      <p>
                        <span class="merge-info ml-5 flex flex-row items-center gap-2">
                          <span class="merged-branch">
                            {entry.branchDisplay === entry.branchMerged ? entry.intoBranch : entry.branchDisplay}
                          </span>
                          <iconify-icon icon="carbon:arrow-left"></iconify-icon>
                          <span class="into-branch">{entry.branchMerged}</span>
                        </span>
                      </p>
                    </div>
                  {:else}
                    <div class="entry">
                      <div class="flex flex-row items-center gap-3">
                        <div class="bg-surface-border size-2 rounded-full"></div>
                        <div
                          class="bg-surface text-xxs text-header border-surface-border flex flex-row items-center rounded-full border px-2 py-0.5"
                        >
                          {DateTime.fromISO(entry.date).toFormat("T")}
                        </div>
                      </div>
                      <p class="ml-5">
                        {entry.message}
                      </p>
                    </div>
                  {/if}
                  <ul class="entry-meta text-xxs text-primary ml-5 flex gap-3 md:flex-row">
                    {#if entry.branchMerged && entry.intoBranch}
                      <li>merge</li>
                    {:else}
                      <li class="branch-display">
                        {shortenText(entry.branchDisplay)}
                      </li>
                    {/if}
                    <li class="version-debug">
                      {entry.version}
                    </li>
                  </ul>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      {/each}

      {#if hasMore}
        <div bind:this={loadMoreTrigger}>
          {#if isLoadingMore}
            <p class="text-sm text-gray-400">Loading more commits...</p>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  @reference "@styles/main.css";
  h1 {
    font-feature-settings: "ss01" 1;
  }
  h3 {
    @apply text-xl;
  }

  p {
    @apply text-base font-medium;
  }

  .date-group {
    @apply flex flex-col gap-12;
  }

  .date-header {
    @apply flex flex-row items-center gap-4;
  }

  .entry {
    @apply flex flex-col items-start gap-3;
  }

  .entry-content {
    @apply flex flex-col gap-5;
  }

  .entry-meta {
    li {
      @apply bg-surface text-xxs text-header border-surface-border flex flex-row items-center rounded-full border px-2 py-0.5;
    }
  }
</style>
