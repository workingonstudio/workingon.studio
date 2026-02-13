<script lang="ts">
  import workHistory from "@data/workHistory.json";
</script>

<section class="flex flex-col gap-6 px-8 py-9 lg:px-16 lg:py-18">
  <h3 class="text-xl font-medium">Work history</h3>
  <ul class="flex flex-col gap-5">
    {#each workHistory as { title, company, status }}
      <li class="flex flex-col gap-1">
        <h3 class="text-header font-medium">{title} @ {company}</h3>
        <p class="text-muted text-sm">{status}</p>
      </li>
    {/each}
  </ul>
</section>
