<script lang="ts">
  import Navigation from "./partials/Navigation.svelte";

  export let category: string | undefined = undefined;
  export let slug: string | undefined = undefined;

  $: isHome = !category && !slug;

  $: formattedSlug = slug ? slug.split("-").join(" ") : "";
</script>

<header class="relative flex w-full flex-row items-center justify-between">
  <div class="flex flex-row items-center gap-3">
    <a
      class="group flex flex-row items-center gap-3"
      href="/projects/sketch-today"
      data-astro-prefetch
      aria-label="Home"
    >
      <div class="logo-mark">
        <iconify-icon icon="material-symbols:diamond-shine-outline" class="icon"></iconify-icon>
      </div>
      <span class="font-bold">Sketch Today</span>
    </a>
    <ul class="pagination flex flex-row gap-1">
      {#if isHome}
        <li></li>
      {:else if slug}
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="icon"></iconify-icon>
          <a href="/projects/sketch-today/{category}">{category}</a>
        </li>
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="icon"></iconify-icon>
          {formattedSlug}
        </li>
      {:else}
        <li>
          <iconify-icon icon="heroicons:chevron-right-16-solid" class="icon"></iconify-icon>
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
    @apply bg-main flex rounded-lg p-1 group-hover:bg-transparent;
    .icon {
      @apply size-[18px] text-lg text-white;
      @apply group-hover:text-primary pointer-events-none;
    }
  }
  .pagination {
    li {
      @apply text-body flex flex-row items-center gap-1 text-xs font-medium capitalize last:font-semibold;
    }
  }
</style>
