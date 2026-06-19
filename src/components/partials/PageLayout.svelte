<script lang="ts">
  export let variant: "default" | "full" = "default";
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
