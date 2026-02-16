<script lang="ts">
  // ContentPanel.svelte - Handles content padding and borders
  export let borderRight: boolean = false;
  export let borderBottom: boolean = false;
  export let noPadding: boolean = false;
</script>

<div class="content-panel" class:border-r={borderRight} class:border-b={borderBottom} class:no-padding={noPadding}>
  <slot />
</div>

<style>
  @reference "@styles/main.css";

  .content-panel {
    @apply border-surface-border flex flex-col;
    @apply px-8 py-9 lg:px-16 lg:py-12;
    @apply border-0; /* Reset, then apply via props */
  }

  .content-panel.border-r {
    @apply border-r-0 lg:border-r;
  }

  .content-panel.border-b {
    @apply border-surface-border border-b;
  }

  .content-panel.no-padding {
    @apply p-0;
  }

  /* Content spacing - children auto-spaced */
  .content-panel > :global(*:not(:last-child)) {
    @apply mb-5;
  }
</style>
