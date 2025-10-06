<script lang="ts">
  import Quote from "./partials/Quote.svelte";
  import quoteData from "@data/dad-reply/quotes.json";
  import Emoji from "./partials/Emoji.svelte";
</script>

<div class="space-y-12">
  <div class="flex flex-col space-y-4 text-center">
    <h2 class="flex flex-col justify-center gap-3 md:flex-row">
      <Emoji class_="flex flex-col justify-center gap-3 md:flex-row" emoji="✊" />
      <span>Join the rebellion against the pointless.</span>
    </h2>
    <p class="text-pretty">Thousands of thumbs. Thousands of minutes saved. Join the movement.</p>
  </div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-3">
    {#each quoteData as quote}
      <Quote {...quote}></Quote>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
