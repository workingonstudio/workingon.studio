<script lang="ts">
  export let noPadding: boolean = false;
  export let borderBottom: boolean = false;
  export let borderBottomDesktop: boolean = false;
</script>

<div
  class="content-panel"
  class:no-padding={noPadding}
  class:border-b={borderBottom}
  class:border-b-desktop={borderBottomDesktop}
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
    @apply border-surface-border lg:border-b;
  }

  .content-panel.border-l {
    @apply border-surface-border border-l;
  }

  .content-panel > :global(*:not(:last-child)) {
    @apply mb-5;
  }

  .content-panel.border-b-desktop {
    @apply border-surface-border lg:border-b;
  }
</style>
