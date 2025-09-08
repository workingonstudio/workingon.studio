<script lang="ts">
  import Quote from "./partials/Quote.svelte";
  import quoteData from "@data/dad-reply/quotes.json";
</script>

<div class="grid grid-cols-3 grid-rows-3 gap-6">
  {#each quoteData as quote}
    <Quote {...quote}></Quote>
  {/each}
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
