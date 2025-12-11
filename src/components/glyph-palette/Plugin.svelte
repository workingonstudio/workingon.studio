<script lang="ts">
  import Badge from "./Badge.svelte";
  let iconlist = [
    "material-symbols:account-circle-outline",
    "material-symbols:info-outline",
    "material-symbols:visibility-outline",
    "material-symbols:calendar-month-outline",
    "material-symbols:nest-clock-farsight-analog-outline",
    "material-symbols:language",
    "material-symbols:lock-outline",
    "material-symbols:error-outline",
    "material-symbols:visibility-off-outline",
    "material-symbols:verified-outline",
    "material-symbols:task-alt",
    "material-symbols:event-outline",
    "material-symbols:bookmark-outline",
    "material-symbols:calendar-today-outline",
    "material-symbols:lightbulb-2-outline",
    "material-symbols:fingerprint",
    "material-symbols:update",
    "material-symbols:code",
    "material-symbols:priority-high",
    "material-symbols:build-outline",
    "material-symbols:supervisor-account-outline",
    "material-symbols:search",
    "material-symbols:home-outline",
    "material-symbols:menu",
    "material-symbols:close",
    "material-symbols:settings-outline",
    "material-symbols:check-circle-outline",
    "material-symbols:favorite-outline",
  ];
</script>

<div class="flex h-fit w-sm flex-col gap-3 rounded-xl border border-gray-300 bg-white p-4 shadow-lg">
  <div class="flex justify-end">
    <div class="header flex w-[225px] flex-row justify-between gap-3">
      <h3>Glyph.Palette</h3>
      <Badge label="v0.0.5" />
    </div>
  </div>
  <div class="false-input flex h-10 w-full flex-row items-center rounded-lg border border-gray-300 p-2">
    <iconify-icon icon="material-symbols:search-rounded" class="text-base"></iconify-icon>
  </div>
  <div class="icon-grid grid grid-cols-7 grid-rows-4 gap-x-5 gap-y-2">
    {#each iconlist as icon, index}
      <button
        type="button"
        aria-label="icon"
        class="flex size-8 items-center justify-center rounded-lg {index === 9 ? 'active' : ''}"
      >
        <iconify-icon {icon} class="text-2xl {index === 9 ? 'text-blue-50' : 'text-gray-900'}"></iconify-icon>
      </button>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  h3 {
    @apply font-cabinet-grotesk text-sm uppercase;
  }
  button {
    &:hover {
      @apply bg-gray-200;
    }
    &.active {
      @apply bg-primary;
    }
  }
</style>
