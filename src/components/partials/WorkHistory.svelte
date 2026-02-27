<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";
  import workHistory from "@data/workHistory.json";

  // Border props for consistent API with ArticleList
  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <h2 class="text-xl font-medium">Work history</h2>
  <ul class="stack">
    {#each workHistory as { title, company, status }}
      <li class="flex flex-col gap-1">
        <h3 class="text-header font-medium">{title} @ {company}</h3>
        <p class="text-muted text-sm">{status}</p>
      </li>
    {/each}
  </ul>
</ContentPanel>
