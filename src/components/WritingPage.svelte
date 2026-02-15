<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";

  export let posts;
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    Writing about design and creativity as it actually is.
  </h1>
</PageHeader>

<section
  class="border-surface-border divide-surface-border grid min-h-screen grid-cols-1 border-0 md:border md:border-b-0 lg:grid-cols-2 lg:divide-x"
>
  <div class="content h-full">
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
  <div class="h-full"></div>
</section>
