<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";
  import workHistory from "@data/workHistory.json";

  // Border props for consistent API with ArticleList
  export let borderBottom: boolean = false;
</script>

<ContentPanel {borderBottom}>
  <div class="flex flex-row items-center gap-3">
    <iconify-icon icon="ph:briefcase-duotone" class="size-5 text-xl text-zinc-500"></iconify-icon>
    <h2>Experience</h2>
  </div>
  <ul class="stack">
    {#each workHistory as { title, company, status }}
      <li class="flex flex-col gap-1">
        <strong class="text-header font-medium">{title} @ {company}</strong>
        <p class="text-muted text-sm">{status}</p>
      </li>
    {/each}
  </ul>
</ContentPanel>
