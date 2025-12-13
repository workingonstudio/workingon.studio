<script lang="ts">
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

<div
  class="flex h-fit w-full flex-col divide-y-1 divide-gray-300 rounded-xl border border-gray-300 bg-white font-[Montserrat] shadow-lg md:w-lg"
>
  <div class="lg relative flex flex-row items-center px-2.5 py-2">
    <ul class="absolute flex flex-row gap-2">
      <li class="size-2.5 rounded-full bg-red-500"></li>
      <li class="size-2.5 rounded-full bg-gray-300"></li>
      <li class="size-2.5 rounded-full bg-green-500"></li>
    </ul>
    <strong class="text-xxs w-full text-center">Glyph Palette v1.0.0</strong>
  </div>
  <div class="flex flex-row items-center justify-between px-3 py-3 md:px-4">
    <ul class="filters">
      <li class="default">Google Material</li>
      <li class="default">Outline</li>
      <li class="default">24 x 24</li>
      <li class="default flex flex-row items-center gap-2">
        <span class="size-2 rounded-full bg-gray-950"></span>
        <span class="hidden md:flex">34, 34, 34, 1</span>
      </li>
    </ul>
    <div class="flex flex-row gap-2">
      <button
        class="highlight hidden flex-row items-center rounded-lg px-2 py-1 text-xs hover:bg-blue-600! md:flex"
        disabled
      >
        Update
      </button>
      <button
        class="default text-body flex size-7 flex-row items-center justify-center rounded-lg font-semibold hover:bg-stone-50!"
      >
        <iconify-icon icon="material-symbols:close-rounded" class="text-base"></iconify-icon>
      </button>
    </div>
  </div>
  <div class="form">
    <div class="flex flex-row gap-6">
      <div class="label">
        <iconify-icon icon="material-symbols:stacks-outline" class="size-4 text-base"></iconify-icon>
        <span class="text-xs font-semibold">Icons</span>
      </div>
      <div class="select">
        <span>Google Material</span>
        <iconify-icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          class="text-body size-4.5 text-lg"
        ></iconify-icon>
      </div>
    </div>
    <div class="flex flex-row gap-6">
      <div class="label">
        <iconify-icon icon="material-symbols:style-outline" class="size-4 text-base"></iconify-icon>
        <span class="text-xs font-semibold">Style</span>
      </div>
      <div class="flex flex-row gap-3">
        <span class="btn default">Regular</span>
        <span class="btn selected">Outline</span>
        <span class="btn default">Rounded</span>
        <span class="btn default">Sharp</span>
      </div>
    </div>
    <div class="flex flex-row gap-6">
      <div class="label">
        <iconify-icon icon="material-symbols:open-in-full-rounded" class="size-4 text-base"></iconify-icon>
        <span class="text-xs font-semibold">Size</span>
      </div>
      <div class="flex flex-row gap-3">
        <span class="btn default">16 x 16</span>
        <span class="btn selected">24 x 24</span>
        <span class="btn default">32 x 32</span>
        <span class="btn default">Custom</span>
      </div>
    </div>
    <div class="flex flex-row gap-6">
      <div class="label">
        <iconify-icon icon="material-symbols:colors-rounded" class="size-4 text-base"></iconify-icon>
        <span class="text-xs font-semibold">Color</span>
      </div>
      <div class="flex flex-row items-center gap-3">
        <div class="flex flex-row items-center gap-3 rounded-xl border border-gray-300 px-3 py-2 inset-shadow-sm">
          <span class="size-2.5 rounded-full bg-gray-950"></span>
          <span class="text-xs font-semibold">34, 34, 34, 1</span>
        </div>
        <span class="btn selected">Rgba</span>
        <span class="btn default">Hex</span>
      </div>
    </div>
  </div>
  <div class="false-input flex h-13 w-full flex-row items-center p-4 inset-shadow-sm">
    <iconify-icon icon="material-symbols:search-rounded" class="text-base"></iconify-icon>
  </div>
  <div class="icon-grid grid grid-cols-7 grid-rows-4 justify-items-center gap-x-5 gap-y-2 p-4">
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
  .filters {
    @apply flex flex-row gap-2;
    li {
      @apply rounded-lg px-2 py-1 text-[10px] font-semibold;
    }
  }
  .form {
    @apply flex flex-col gap-4 p-4;
    .label {
      @apply flex flex-row items-center gap-2 md:min-w-16;
      span {
        @apply hidden md:flex;
      }
    }
    .select {
      @apply flex h-10 w-full flex-row items-center justify-between rounded-lg border border-gray-200 bg-stone-50 p-3 text-xs font-semibold;
    }
  }
  .btn {
    @apply flex min-h-7 flex-row items-center rounded-lg px-2 py-1 text-xs font-semibold;
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
