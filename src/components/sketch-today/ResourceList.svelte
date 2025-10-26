<script lang="ts">
  import Resource from "./partials/Resource.svelte";
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
