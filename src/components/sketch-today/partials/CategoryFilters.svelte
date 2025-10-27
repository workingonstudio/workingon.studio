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
      label: "todo",
      bgColor: "bg-stone-100",
      textColor: "text-stone-500",
    },
  ];

  function setFilter(category: string) {
    $activeFilter = category;
  }
</script>

<div class="flex flex-row gap-3">
  <button type="button" onclick={() => setFilter("all")} class="tag bg-gray-800 text-white hover:text-gray-800">
    All
  </button>
  {#each tags as { label, bgColor, textColor }}
    <button type="button" onclick={() => setFilter(label)} class="tag {bgColor} {textColor} hover:bg-transparent">
      {label}
    </button>
  {/each}
</div>

<style>
  @reference "@styles/sketch-today.css";
  .tag {
    @apply cursor-pointer rounded-lg px-3 py-1 text-xs font-semibold capitalize hover:bg-transparent;
  }
</style>
