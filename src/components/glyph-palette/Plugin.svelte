<script lang="ts">
</script>

<div class="flex flex-col gap-3 rounded-lg border border-gray-300 p-4 shadow-2xl">
  <div class="header flex flex-row justify-end">
    <h3>Glyph.Palette</h3>
  </div>
  <div class="false-input flex h-10 w-full flex-row items-center rounded-md border border-gray-300 p-2">
    <iconify-icon icon="material-symbols:search-rounded" class="text-base"></iconify-icon>
  </div>
  <div class="icon-grid"></div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  h3 {
    @apply font-cabinet-grotesk text-sm uppercase;
  }
</style>
