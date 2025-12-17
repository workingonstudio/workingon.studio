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
    <div class="timeline-groups flex flex-col">
      {#each groupedEntries as group}
        <div class="date-group">
          <h3 class="date-header mb-12">
            {group.date}
          </h3>
          <ul class="timeline-entries mb-12 flex flex-col gap-12">
            {#each group.entries as entry}
              <li class="timeline-entry space-y-2" data-type={entry.type}>
                <div class="entry-content space-y-3">
                  {#if entry.branchMerged && entry.intoBranch}
                    <p class="message">
                      <span class="merge-info flex flex-row items-center gap-2">
                        <span class="merged-branch">
                          {entry.branchDisplay === entry.branchMerged ? entry.intoBranch : entry.branchDisplay}
                        </span>
                        <iconify-icon icon="carbon:arrow-left"></iconify-icon>
                        <span class="into-branch">{entry.branchMerged}</span>
                      </span>
                    </p>
                  {:else}
                    <p class="text-pretty">
                      {entry.message}
                    </p>
                  {/if}
                  <ul class="entry-meta text-xxs text-primary flex flex-col gap-6 md:flex-row">
                    {#if entry.branchMerged && entry.intoBranch}
                      <li>
                        <span class="h-[18px] w-[18px]">
                          <iconify-icon icon="carbon:merge" width="18" height="18" class="text-base"></iconify-icon>
                        </span>
                        Merge
                      </li>
                    {:else}
                      <li class="branch-display">
                        <span class="h-[18px] w-[18px]">
                          <iconify-icon icon="carbon:branch" width="18" height="18" class="text-body"></iconify-icon>
                        </span>
                        {shortenText(entry.branchDisplay)}
                      </li>
                    {/if}
                    <li class="version-debug">
                      <span class="h-[18px] w-[18px]">
                        <iconify-icon icon="carbon:version" width="18" height="18" class="text-body"></iconify-icon>
                      </span>
                      {entry.version}
                    </li>
                    <li class="time">
                      <span class="h-[18px] w-[18px]">
                        <iconify-icon
                          icon="carbon:network-time-protocol"
                          width="18"
                          height="18"
                          class="text-body"
                        ></iconify-icon>
                      </span>
                      {DateTime.fromISO(entry.date).toFormat("TT ZZ")}
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
    @apply text-3xl;
  }
  .entry-meta {
    li {
      @apply text-xxs flex flex-row items-center gap-2 uppercase;
    }
  }
</style>
