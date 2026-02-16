<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let header: string;
  export let articles: Array<{
    slug: string;
    title: string;
    description?: string;
  }>;

  // Border props replace the containerClass pattern
  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <h2 class="text-xl font-medium">{header}</h2>
  <ul class="stack">
    {#each articles as article}
      <li class="flex flex-col gap-1">
        <a
          href={`/writing/${article.slug}`}
          class="text-header flex flex-row items-center gap-2 font-medium hover:underline"
        >
          {article.title}
          <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
        </a>
        {#if article.description}
          <p class="text-muted text-sm">{article.description}</p>
        {/if}
      </li>
    {/each}
  </ul>
</ContentPanel>

<style>
  @reference "@styles/main.css";
</style>
