<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  export let posts;
</script>

<PageLayout extraStyles="w-full lg:w-xl py-12">
  <h1>
    <span class="text-primary">Writing</span>
    <br />
    For designers who are tired of design writing.
  </h1>
  <div>
    <ul class="flex flex-col gap-8">
      {#each posts as post}
        <li class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3>{post.data.title}</h3>
            {#if post.data.description}
              <p>{post.data.description}</p>
            {/if}
          </div>
          <a href={`/writing/${post.id}`} class="text-primary flex flex-row items-center gap-2 text-xs uppercase">
            Read more
            <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
          </a>
        </li>
      {/each}
    </ul>
  </div>
  <div></div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
