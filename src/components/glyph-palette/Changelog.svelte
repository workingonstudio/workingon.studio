<script lang="ts">
  import Badge from "./Badge.svelte";
  export let changelogData;
</script>

<section class="progress flex flex-col gap-12">
  {#each changelogData as { version, date, status, icon, items }}
    <div class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon {icon} class="text-2xl"></iconify-icon>
        <h4>{status} release</h4>
        <Badge label={"v" + version} />
      </div>
      <ul>
        {#each items as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/each}
</section>

<style>
  @reference "@styles/glyph-palette.css";
  h4 {
    @apply first-letter:uppercase;
  }
  .progress {
    ul {
      li {
        @apply text-text-body before:mr-2 before:content-['─'];
      }
    }
  }
</style>
