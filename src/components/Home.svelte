<script lang="ts">
  import PageHeader from "./partials/PageHeader.svelte";
  const actionList = ["standing up for delight", "pulling back the curtain", "calling out the bullshit"];
</script>

<PageHeader>
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
</PageHeader>

<style>
  @reference "@styles/global.css";
  h1 {
    span {
      @apply before:content-["\2217\2217"];
    }
  }
</style>
