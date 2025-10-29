<script lang="ts">
  import { activeFilter } from "@stores/sketch-today/filterStore";

  let tags = [
    {
      label: "palettes",
      bgColor: "bg-violet-50",
      textColor: "text-violet-500",
    },
    {
      label: "icons",
      bgColor: "bg-orange-50",
      textColor: "text-orange-500",
    },
    {
      label: "plugins",
      bgColor: "bg-pink-50",
      textColor: "text-pink-500",
    },
    {
      label: "systems",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
    {
      label: "soon",
      bgColor: "bg-stone-100",
      textColor: "text-stone-500",
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
    class="tag {$activeFilter === 'all' ? 'bg-gray-800 text-white' : 'bg-transparent text-gray-800'}"
    class:active={$activeFilter === "all"}
  >
    All
  </button>
  {#each tags as { label, bgColor, textColor }}
    <button
      type="button"
      onclick={() => toggleFilter(label)}
      class="tag {textColor} {$activeFilter === label ? bgColor : 'bg-transparent'}"
      class:active={$activeFilter === label}
    >
      {label}
    </button>
  {/each}
</div>

<style>
  @reference "@styles/sketch-today.css";
  .tag {
    @apply cursor-pointer rounded-lg px-3 py-1 text-xs font-semibold capitalize;
  }
</style>
