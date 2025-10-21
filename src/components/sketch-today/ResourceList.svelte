<script lang="ts">
  import Resource from "./partials/Resource.svelte";
  import CategoryFilters from "./partials/CategoryFilters.svelte";

  let resources = [
    {
      type: "palette",
      title: "Tailwind 4.0.1 Colors",
      description: "The most up-to-date color variables.",
      icon: "swatch-16-solid",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-100",
      bgIconColor: "bg-violet-100",
      textColor: "text-violet-500",
    },
    {
      type: "icon",
      title: "Heroicons",
      description: "Beautiful hand-crafted SVG icons.",
      icon: "square-2-stack-16-solid",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100",
      bgIconColor: "bg-orange-100",
      textColor: "text-orange-500",
    },
    {
      type: "plugin",
      title: "Sort Layers",
      description: "Sort by name, position, or type.",
      icon: "squares-plus-16-solid",
      bgColor: "bg-pink-50",
      bgIconColor: "bg-pink-100",
      borderColor: "border-pink-100",
      textColor: "text-pink-500",
    },
    {
      type: "soon",
      title: "Lucide Icons",
      description: "Beautiful & consistent icons.",
      icon: "square-2-stack-16-solid",
      bgColor: "bg-stone-100",
      bgIconColor: "bg-stone-200",
      borderColor: "border-stone-200",
      textColor: "text-stone-500",
    },
    {
      type: "components",
      title: "IBM Carbon",
      description: "IBM Design Language Library",
      icon: "cube-transparent-16-solid",
      bgColor: "bg-blue-50",
      bgIconColor: "bg-blue-100",
      borderColor: "border-blue-100",
      textColor: "text-blue-500",
    },
  ];
</script>

<div class="flex flex-col gap-16">
  <div class="grid auto-rows-auto grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
    {#each resources as resource}
      <Resource {...resource} />
    {/each}
  </div>
</div>

<style>
  @reference "@styles/sketch-today.css";
</style>
