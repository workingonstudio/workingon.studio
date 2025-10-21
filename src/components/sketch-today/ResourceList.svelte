<script lang="ts">
  import Resource from "./partials/Resource.svelte";
  import icons from "@data/sketch-today/icons.json";
  import palettes from "@data/sketch-today/palettes.json";
  import plugins from "@data/sketch-today/plugins.json";
  import system from "@data/sketch-today/systems.json";
  export let resourceList;
</script>

<div class="flex flex-col gap-16">
  <div class="grid auto-rows-auto grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
    {#each resourceList as resource}
      <Resource {...resource} />
    {/each}
  </div>
</div>

<style>
  @reference "@styles/sketch-today.css";
</style>
