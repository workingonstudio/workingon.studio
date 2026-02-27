<script lang="ts">
  // PageLayout.svelte - Reusable two-column layout
  export let variant: "default" | "full" = "default";
  // variant="full" removes min-h-screen for pages that don't need it
</script>

<section class="page-layout" class:min-h-screen={variant === "default"}>
  <slot />
</section>

<style>
  @reference "@styles/main.css";

  .page-layout {
    @apply divide-surface-border grid grid-cols-1 lg:grid-cols-2 lg:divide-x;
    @apply items-start lg:items-stretch;
  }
</style>
