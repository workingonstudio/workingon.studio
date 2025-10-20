<script lang="ts">
  import Navigation from "./partials/Navigation.svelte";
</script>

<header class="flex w-full flex-row items-center justify-between">
  <div class="flex flex-row gap-3">
    <a class="group flex flex-row items-center gap-3" href="/">
      <div class="logo-mark">
        <iconify-icon icon="material-symbols:diamond-shine-outline" class="icon"></iconify-icon>
      </div>
      <span class="font-bold">Sketch Today</span>
      <span class="text-body hidden text-xs font-medium md:flex">Modern Sketch Resources.</span>
    </a>
  </div>
  <Navigation />
</header>

<style>
  @reference "@styles/sketch-today.css";
  .logo-mark {
    @apply bg-main flex rounded-lg p-1 group-hover:bg-stone-50;
    .icon {
      @apply text-lg text-white;
      @apply group-hover:text-primary;
    }
  }
</style>
