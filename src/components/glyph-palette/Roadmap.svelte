<script lang="ts">
  import Badge from "./Badge.svelte";
  import Icon from "./Icon.svelte";
  export let productChangelogs;
</script>

<div id="roadmap" class="flex flex-col justify-between gap-12 md:flex-row md:gap-6">
  <div class="flex w-full flex-col gap-6 md:w-xl">
    <Icon icon="map-search-outline-rounded" />
    <div class="flex flex-col gap-3">
      <h2>Roadmap.</h2>
      <p class="text-xl">
        No Gantt chart here. Just a list of features and improvements I hope to add in the coming months.
      </p>
    </div>
  </div>
  <div class="flex w-full flex-col gap-6 md:w-md">
    {#each productChangelogs as { version, date, status, icon, items }}
      <div class="flex flex-col gap-6 rounded-2xl bg-stone-100 p-6">
        <div class="flex flex-row items-center gap-4">
          <iconify-icon {icon} class="size-6 text-2xl"></iconify-icon>
          <h4>{status} release</h4>
          <Badge label={`v${version.major}.${version.minor}.${version.patch}`} bgColor="bg-stone-200" />
        </div>
        <ul>
          {#each items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  h2 {
    @apply text-3xl md:text-5xl;
  }
  h4 {
    @apply first-letter:uppercase;
  }
  ul {
    li {
      @apply text-text-body before:mr-2 before:content-['─'];
    }
  }
</style>
