<script lang="ts">
  import Resource from "./partials/Resource.svelte";

  let resources = [
    {
      type: "palette",
      title: "Tailwind 4.0.1 Colors",
      description: "The most up-to-date color variables.",
      icon: "swatch-16-solid",
    },
    {
      type: "icon",
      title: "Heroicons",
      description: "Beautiful hand-crafted SVG icons.",
      icon: "square-2-stack-16-solid",
    },
    {
      type: "plugin",
      title: "Sort Layers",
      description: "Sort by name, position, or type.",
      icon: "squares-plus-16-solid",
    },
    {
      type: "soon",
      title: "Lucide Icons",
      description: "Beautiful & consistent icons.",
      icon: "square-2-stack-16-solid",
    },
    {
      type: "component",
      title: "IBM Carbon",
      description: "IBM Design Language Library",
      icon: "cube-transparent-16-solid",
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
