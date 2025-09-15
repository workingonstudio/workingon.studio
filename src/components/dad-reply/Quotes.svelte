<script lang="ts">
  import Quote from "./partials/Quote.svelte";
  import quoteData from "@data/dad-reply/quotes.json";
</script>

<div class="space-y-12">
  <div class="flex flex-col space-y-4 text-left md:text-center">
    <h2 class="flex flex-col gap-3 md:flex-row md:justify-center">
      <span class="flex text-4xl md:inline-flex">✊</span>
      <span>Join the rebellion against the pointless.</span>
    </h2>
    <p>1000’s of thumbs, 1000’s of minutes saved. Join the movement.</p>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-6">
    {#each quoteData as quote}
      <Quote {...quote}></Quote>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
