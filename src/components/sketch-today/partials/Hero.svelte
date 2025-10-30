<script lang="ts">
  export let subtitle: string = "It's time. Come back home.";
  export let title: string = "A collection of modern resources for Sketch.";
</script>

<div class="flex py-18">
  <div class="flex flex-col gap-1">
    <span class="text-body">{subtitle}</span>
    <h1>{title}</h1>
  </div>
</div>

<style>
  @reference "@styles/sketch-today.css";
  h1 {
    @apply text-2xl;
  }
</style>
