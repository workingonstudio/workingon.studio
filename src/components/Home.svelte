<script lang="ts">
  const actionList = ["calling out the bullshit", "standing up for delight", "pulling back the curtain"];
</script>

<div class="group w-full md:w-3xl">
  <div class="space-y-12">
    <!-- prettier-ignore -->
    <h1>
      We've been prioritising the wrong things for too long. I make things that force you to look at what you're actually doing<span>.</span>
    </h1>
    <div class="max-w-md">
      {#each actionList as item}
        <!-- prettier-ignore -->
        <p class="leading-7">
          <span class="hidden sm:inline-block">working on</span>...{item}.
        </p>
      {/each}
    </div>
    <div>
      <p>working on...a new site.</p>
    </div>
  </div>
</div>

<style>
  @reference "@styles/global.css";

  p {
    @apply text-body;
  }
</style>
