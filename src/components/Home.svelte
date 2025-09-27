<script lang="ts">
  const actionList = ["making the obvious visable", "centring people in technology", "finding delight in the mundane"];
</script>

<div class="group w-full md:w-3xl">
  <div class="space-y-12">
    <!-- prettier-ignore -->
    <h1>
      A creative studio producing cultural mirror products that make unconscious behaviours suddenly visible<span>.</span>
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
    color: var(--color-text-body);
  }
</style>
