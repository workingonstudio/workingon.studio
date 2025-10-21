<script lang="ts">
  import Navigation from "./partials/Navigation.svelte";
  export let currentPath;
  export let isHome;

  const [category, slug] = currentPath.split("sketch-today/")[1].split("/");
</script>

<header class="flex w-full flex-row items-center justify-between">
  <div class="flex flex-row items-center gap-3">
    <a class="group flex flex-row items-center gap-3" href="/projects/sketch-today/">
      <div class="logo-mark">
        <iconify-icon icon="material-symbols:diamond-shine-outline" class="icon"></iconify-icon>
      </div>
      <span class="font-bold">Sketch Today</span>
    </a>
    <ul class="pagination flex flex-row gap-1">
      {#if isHome}
        <li>Modern Sketch Resources.</li>
      {:else if slug}
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="text-base text-gray-400"></iconify-icon>
          <a href="/projects/sketch-today/{category}">{category}</a>
        </li>
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="text-base text-gray-400"></iconify-icon>
          {slug}
        </li>
      {:else}
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="text-base text-gray-400"></iconify-icon>
          {category}
        </li>
      {/if}
    </ul>
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
  .pagination {
    li {
      @apply text-body flex flex-row items-center gap-1 text-xs font-medium capitalize last:font-semibold;
    }
  }
</style>
