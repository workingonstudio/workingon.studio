<script lang="ts">
  import Badge from "./Badge.svelte";
</script>

<header id="top" class="flex flex-row items-center justify-between">
  <div class="flex flex-row items-center gap-6">
    <a href="/" class="logo">glyph.palette</a>
    <div class="flex flex-row gap-3">
      <Badge label="Alpha" bgColor="bg-orange-300" />
      <Badge label="v0.5" />
    </div>
  </div>
  <nav>
    <ul class="flex flex-row gap-6">
      <li><a href="/">Roadmap</a></li>
      <li class="flex items-center gap-1">
        <a href="https://sketchto.day">Sketchto.day</a>
        <iconify-icon icon="material-symbols:open-in-new"></iconify-icon>
      </li>
    </ul>
  </nav>
</header>

<style>
  @reference "@styles/glyph-palette.css";
  header {
    @apply mb-11 py-14;
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
