<script lang="ts">
  import { activeFilter } from "@stores/sketch-today/filterStore";

  let tags = [
    {
      label: "palettes",
      bgColor: "bg-violet-50",
      textColor: "text-violet-500",
      borderColor: "border-violet-200",
      icon: "heroicons:swatch-16-solid",
    },
    {
      label: "icons",
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
      borderColor: "border-orange-200",
      icon: "heroicons:square-2-stack-16-solid",
    },
    {
      label: "plugins",
      bgColor: "bg-pink-50",
      textColor: "text-pink-500",
      borderColor: "border-pink-200",
      icon: "heroicons:squares-plus-16-solid",
    },
    {
      label: "systems",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
      borderColor: "border-blue-200",
      icon: "heroicons:cube-transparent-16-solid",
    },
    {
      label: "soon",
      bgColor: "bg-stone-100",
      textColor: "text-stone-500",
      borderColor: "border-stone-200",
      icon: "heroicons:clock-16-solid",
    },
  ];

  function toggleFilter(category: string) {
    if ($activeFilter === category) {
      $activeFilter = "all";
    } else {
      $activeFilter = category;
    }
  }
</script>

<div class="sticky top-2 flex snap-mandatory flex-row gap-3 overflow-x-auto bg-stone-50 py-4 md:overflow-visible">
  <button
    type="button"
    onclick={() => ($activeFilter = "all")}
    class="tag border-gray-200 {$activeFilter === 'all' ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-800'}"
    class:active={$activeFilter === "all"}
  >
    <iconify-icon icon="heroicons:list-bullet-16-solid" class="text-sm"></iconify-icon>
    All
  </button>
  {#each tags as { label, bgColor, textColor, borderColor, icon }}
    <button
      type="button"
      onclick={() => toggleFilter(label)}
      class="tag {borderColor} {textColor} {$activeFilter === label ? bgColor : 'bg-transparent'}"
      class:active={$activeFilter === label}
    >
      <iconify-icon {icon} class="text-sm"></iconify-icon>
      {label}
    </button>
  {/each}
</div>

<style>
  @reference "@styles/sketch-today.css";
  .tag {
    @apply flex cursor-pointer flex-row items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold capitalize;
  }
</style>
