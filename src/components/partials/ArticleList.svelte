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
</script>

<ContentPanel {borderBottom}>
  <div class="flex flex-row items-center gap-3">
    <iconify-icon icon="ph:pen-nib" class="size-5 text-xl text-zinc-500"></iconify-icon>
    <h2 class="font-medium">{header}</h2>
  </div>
  <ul class="stack">
    {#each articles as article}
      <li class="flex flex-col gap-1">
        <a
          href={`/writing/${article.slug}`}
          class="text-header flex flex-row items-center gap-2 font-medium hover:underline"
        >
          {article.title}
          <iconify-icon icon="ph:arrow-up-right-bold" class="size-4"></iconify-icon>
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
