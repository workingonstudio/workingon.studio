<script lang="ts">
  export let variant: "default" | "full" = "default";
</script>

<section class="page-layout" class:min-h-screen={variant === "default"}>
  <slot />
</section>
