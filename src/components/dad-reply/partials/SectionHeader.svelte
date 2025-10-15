<script lang="ts">
  export let emoji: string;
  export let header: string;
  export let body: string;
  export let hasFootnote: boolean = false;
  export let footnote: string = "";
</script>

<div class="flex flex-col space-y-4 text-center">
  <span class="cursor-default text-4xl">{emoji}</span>
  <h2>{header}</h2>
  <p class="text-pretty">{@html body}</p>
  {#if hasFootnote}
    <small>* {footnote}</small>
  {/if}
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
