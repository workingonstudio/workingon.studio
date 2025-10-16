<script lang="ts">
  import Navigation from "./partials/Navigation.svelte";
</script>

<header class="flex w-full flex-row items-center justify-between">
  <div class="flex flex-row gap-3">
    <div class="bg-main flex rounded-lg p-1">
      <iconify-icon icon="material-symbols:diamond-shine-outline" class="text-lg text-white"></iconify-icon>
    </div>
    <div class="flex items-center gap-3">
      <span class="font-bold">Sketch Today</span>
      <span class="text-body text-xs font-medium">Modern Sketch Resources</span>
    </div>
  </div>
  <Navigation />
</header>

<style>
  @reference "@styles/sketch-today.css";
</style>
