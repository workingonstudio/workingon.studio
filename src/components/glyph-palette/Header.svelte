<script lang="ts">
  import Badge from "./Badge.svelte";
</script>

<header class="flex flex-row items-center gap-6">
  <a href="/">glyph.palette</a>
  <div class="flex flex-row gap-3">
    <Badge label="Alpha" bgColor="bg-orange-300" />
    <Badge label="v0.5" />
  </div>
</header>

<style>
  @reference "@styles/glyph-palette.css";
  header {
    @apply mb-11 py-14;
    a {
      @apply font-cabinet-grotesk text-base font-bold uppercase;
    }
  }
</style>
