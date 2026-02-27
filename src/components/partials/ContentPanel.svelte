<script lang="ts">
  export let borderRight: boolean = false;
  export let borderBottom: boolean = false;
  export let borderLeft: boolean = false;
  export let noPadding: boolean = false;
</script>

<div
  class="content-panel"
  class:border-r={borderRight}
  class:border-b={borderBottom}
  class:border-l={borderLeft}
  class:no-padding={noPadding}
>
  <slot />
</div>

<style>
  @reference "@styles/main.css";

  .content-panel {
    @apply px-8 py-9 lg:px-16 lg:py-12;
  }

  .content-panel.no-padding {
    @apply p-0;
  }

  .content-panel.border-r {
    @apply border-surface-border border-r;
  }

  .content-panel.border-b {
    @apply border-surface-border border-b;
  }

  .content-panel.border-l {
    @apply border-surface-border border-l;
  }

  .content-panel > :global(*:not(:last-child)) {
    @apply mb-5;
  }
</style>
