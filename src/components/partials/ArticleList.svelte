<script lang="ts">
  export let header: string;
  export let containerClass = "";
  export let articles: Array<{
    slug: string;
    title: string;
    description?: string;
  }>;
</script>

<section class="content gap-6 {containerClass}">
  <h2 class="text-xl font-medium">{header}</h2>
  <ul class="flex flex-col gap-5">
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
</section>

<style>
  @reference "@styles/main.css";
</style>
