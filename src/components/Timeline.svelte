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
</PageHeader>

<section class="timeline-section border-surface-border divide-surface-border grid grid-cols-2 divide-x border">
  <div></div>
  <div class="timeline-reveal group divide-surface-border flex flex-col divide-y">
    {#each groupedEntries as group}
      <div class="flex flex-col gap-6 px-16 py-12">
        <h3 class="text-header flex flex-row items-center gap-2 font-medium">
          {group.date}
        </h3>
        <ul class="flex flex-col gap-5">
          {#each group.entries as entry}
            <li class="flex flex-col gap-1" data-type={entry.type}>
              {#if entry.branchMerged && entry.intoBranch}
                <p class="text-header flex flex-row items-center gap-2 font-medium">
                  {entry.branchDisplay === entry.branchMerged ? entry.intoBranch : entry.branchDisplay}
                  <iconify-icon icon="ph:arrow-left-bold"></iconify-icon>
                  {entry.branchMerged}
                </p>
              {:else}
                <p class="text-header flex flex-row items-center font-medium">
                  {entry.message}
                </p>
              {/if}
              <ul class="text-xxs text-muted flex gap-3 font-medium">
                <li>{DateTime.fromISO(entry.date).toFormat("T")}</li>
                {#if entry.branchMerged && entry.intoBranch}
                  <li>merge</li>
                {:else}
                  <li class="branch-display text-muted font-medium">
                    {shortenText(entry.branchDisplay)}
                  </li>
                {/if}
                <li>{entry.version}</li>
              </ul>
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
</section>

<style>
  @reference "@styles/main.css";
  h1 {
    font-feature-settings: "ss01" 1;
  }
  h3 {
    @apply text-xl;
  }
</style>
