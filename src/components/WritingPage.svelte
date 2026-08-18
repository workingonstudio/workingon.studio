<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  export let posts;
</script>

<PageLayout extraStyles="w-full lg:w-xl py-12">
  <h1>
    <span class="text-primary">Writing.</span>
    <br />
    For designers who are tired of design writing.
  </h1>
  <p>Working directly with founders and their teams. Not as a pair of hands. As a guide.</p>
  <div>
    <ul class="flex flex-col gap-8">
      {#each posts as post}
        <li class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <a href={`/writing/${post.id}`} class="hover:underline">
              <h3>{post.data.title}</h3>
            </a>
            {#if post.data.description}
              <p>{post.data.description}</p>
            {/if}
          </div>
          <div class="text-primary flex flex-row items-center gap-2">
            <a href={`/writing/${post.id}`} class=" text-xs uppercase hover:underline">Read more</a>
            <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  <div></div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
