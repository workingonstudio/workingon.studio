<script lang="ts">
  export let type: string;
  export let title: string;
  export let tagline: string;
  export let released: boolean;
  export let slug: string;
  export let iconSet: string = "heroicons";

  let icon: string;

  switch (type) {
    case "icon":
      icon = "square-2-stack-16-solid";
      break;
    case "palette":
      icon = "swatch-16-solid";
      break;
    case "plugin":
      icon = "squares-plus-16-solid";
      break;
    case "system":
      icon = "cube-transparent-16-solid";
      break;
    case "soon":
      icon = "square-2-stack-16-solid";
      break;
  }
</script>

{#if released}
  <a href="/projects/sketch-today/{type + 's'}/{slug}/" class="resource {released ? type : 'soon'}">
    <iconify-icon icon="{iconSet}:{icon}" class="icon"></iconify-icon>
    <div class="flex flex-col gap-0.5">
      <h4 class="text-header text-sm font-semibold">{title}</h4>
      <p class="text-xs">{tagline}</p>
    </div>
  </a>
{:else}
  <div class="resource {released ? type : 'soon'}">
    <iconify-icon icon="{iconSet}:{icon}" class="icon"></iconify-icon>
    <div class="flex flex-col gap-0.5">
      <h4 class="text-sm font-semibold">{title}</h4>
      <p class="text-xs">{tagline}</p>
    </div>
  </div>
{/if}

<style>
  @reference "@styles/sketch-today.css";
</style>
