<script lang="ts">
  const actionList = ["standing up for delight", "pulling back the curtain", "calling out the bullshit"];
</script>

<div class="group mx-2 mt-14 mb-16 w-full">
  <div class="space-y-12">
    <!-- prettier-ignore -->
    <h1>
      Design has been prioritising the wrong thing for too long. F<span></span>k metrics, let’s make cool shit again.
    </h1>
    <div class="flex max-w-xl flex-col gap-12">
      <p>I design for myself, and the only people that ever mattered.</p>
      <!-- prettier-ignore -->
      <p>
        {#each actionList as item}
          ...{item}.<br/>
        {/each}
      </p>
    </div>
  </div>
</div>

<style>
  @reference "@styles/global.css";
  p {
    @apply text-body text-xl/relaxed;
  }
  h1 {
    @apply text-pretty;
    span {
      @apply before:content-["\2217\2217"];
    }
  }
</style>
