<script lang="ts">
  import Resource from "./partials/Resource.svelte";
  import { activeFilter } from "@stores/sketch-today/filterStore";

  export let resourceList;

  $: filteredResources =
    $activeFilter === "all"
      ? resourceList
      : $activeFilter === "todo"
        ? resourceList.filter((r: any) => r.released === false)
        : resourceList.filter((r: any) => r.category === $activeFilter);
</script>

<div class="flex flex-col gap-16">
  <div class="grid auto-rows-auto grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
    {#each filteredResources as resource}
      <Resource {...resource} />
    {/each}
  </div>
</div>

<style>
  @reference "@styles/sketch-today.css";
</style>
