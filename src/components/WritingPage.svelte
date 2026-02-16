<script lang="ts">
  import ContentPanel from "./partials/ContentPanel.svelte";
  import PageLayout from "./partials/PageLayout.svelte";
  export let posts;
</script>

<ContentPanel borderBottom>
  <!-- prettier-ignore -->
  <h1>
    Writing about design and creativity as it actually is.
  </h1>
</ContentPanel>

<PageLayout>
  <ContentPanel>
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
  </ContentPanel>
  <div></div>
</PageLayout>
