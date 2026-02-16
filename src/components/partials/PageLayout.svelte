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
    @apply border-surface-border grid grid-cols-1;
    @apply border-y;
    @apply md:border md:border-b-0;
    @apply lg:grid-cols-2;
    @apply items-start lg:items-stretch;
  }
</style>
