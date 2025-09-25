<script lang="ts">
  const actionList = [
    "making the obvious visable",
    "centring people in technology",
    "finding delight in the mundane",
  ];
</script>

<div class="max-w-md space-y-12">
  <div class="group space-y-12">
    <div class="text-sm space-y-12 font-sans leading-6">
      <div>
        {#each actionList as item}
          <p>
            <span class="hidden sm:inline-block">working on</span>...{item}.
          </p>
        {/each}
      </div>
      <div>
        <p>working on...a new site.</p>
      </div>
    </div>
  </div>
</div>

<style>
</style>
