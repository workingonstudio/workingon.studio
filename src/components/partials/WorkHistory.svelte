<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";
  import workHistory from "@data/workHistory.json";

  // Border props for consistent API with ArticleList
  export let borderBottom: boolean = false;
</script>

<ContentPanel {borderBottom}>
  <h2 class="font-medium">Work history</h2>
  <ul class="stack">
    {#each workHistory as { title, company, status }}
      <li class="flex flex-col gap-1">
        <strong class="text-header font-medium">{title} @ {company}</strong>
        <p class="text-muted text-sm">{status}</p>
      </li>
    {/each}
  </ul>
</ContentPanel>
