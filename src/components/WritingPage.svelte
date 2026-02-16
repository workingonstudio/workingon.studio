<script lang="ts">
  import ContentPanel from "./partials/ContentPanel.svelte";
  export let posts;
</script>

<ContentPanel borderLeft borderRight>
  <!-- prettier-ignore -->
  <h1>
    Writing about design and creativity as it actually is.
  </h1>
</ContentPanel>

<section class="border-surface-border grid-1 grid min-h-screen border border-b-0 lg:grid-cols-2">
  <div class="content border-surface-border border-0 lg:border-r">
    <ul class="flex flex-col gap-5">
      {#each posts as post}
        <li class="flex flex-col gap-1">
          <a
            href={`/writing/${post.slug}`}
            class="text-header flex flex-row items-center gap-2 font-medium hover:underline"
          >
            {post.data.title}
            <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
          </a>
          {#if post.data.description}
            <p class="text-muted text-sm">{post.data.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  <div class="hidden lg:block"></div>
</section>
