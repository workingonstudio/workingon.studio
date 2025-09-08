<script lang="ts">
  import Quote from "./partials/Quote.svelte";
  import quoteData from "@data/dad-reply/quotes.json";
</script>

<div class="space-y-12">
  <div class="flex flex-col space-y-4 text-center">
    <h3 class="text-[32px] font-semibold text-slate-700">
      <span class="text-4xl">✊</span>
      Join the rebellion against the pointless.
    </h3>
    <p class="text-slate-500">1000’s of thumbs, 1000’s of minutes saved. Join the movement.</p>
  </div>
  <div class="grid grid-cols-3 grid-rows-3 gap-6">
    {#each quoteData as quote}
      <Quote {...quote}></Quote>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
