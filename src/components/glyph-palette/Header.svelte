<script lang="ts">
  import Badge from "./Badge.svelte";
  function handleClick() {
    const isMobile = window.innerWidth < 1024;
    const id = isMobile ? "mobile" : "desktop";
    document.getElementById(id)?.focus();
  }
</script>

<div class="bg-bg/90 sticky top-0 z-10 border-b-1 border-stone-100">
  <header id="top" class="mx-auto flex flex-row items-center justify-between px-4 md:max-w-6xl">
    <div class="flex flex-row items-center gap-6">
      <a href="#top" class="logo">glyph.palette</a>
      <div class="flex flex-row gap-3">
        <Badge label="Beta" type="highlight" />
        <Badge label="v1.0.0" />
      </div>
    </div>
    <nav>
      <ul class="flex flex-row items-center gap-6">
        <li class="hidden md:flex"><a href="#roadmap">Roadmap</a></li>
        <li class="hidden items-center gap-1 md:flex">
          <a href="https://sketchto.day?ref=glyphpalette" target="_blank">Sketchto.day</a>
          <iconify-icon icon="material-symbols:open-in-new" class="size-3"></iconify-icon>
        </li>
        <li>
          <button on:click={handleClick} class="highlight cursor-pointer rounded-lg px-3 py-1.5 hover:bg-blue-700">
            Try the Beta
          </button>
        </li>
      </ul>
    </nav>
  </header>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  header {
    @apply py-8 md:py-10;
    .logo {
      @apply font-cabinet-grotesk text-base font-bold uppercase;
    }
    nav {
      @apply text-xs uppercase;
      a {
        @apply hover:underline;
      }
    }
  }
</style>
