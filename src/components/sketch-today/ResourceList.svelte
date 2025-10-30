<script lang="ts">
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import Resource from "./partials/Resource.svelte";
  import { activeFilter } from "@stores/sketch-today/filterStore";

  export let resourceList;

  $: filteredResources =
    $activeFilter === "all"
      ? resourceList
      : $activeFilter === "soon"
        ? resourceList.filter((r: any) => r.released === false)
        : resourceList.filter((r: any) => r.category === $activeFilter);
</script>

<div class="flex flex-col gap-16">
  <div class="grid auto-rows-auto grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 2xl:grid-cols-4">
    {#each filteredResources as resource (resource.slug)}
      <div animate:flip={{ duration: 400 }} in:fly={{ y: 20, duration: 300 }} out:fly={{ y: -20, duration: 200 }}>
        <Resource {...resource} />
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/sketch-today.css";
</style>
