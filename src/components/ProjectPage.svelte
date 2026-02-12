<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>
    {daysSince} days passed.
    <br />
    8 projects, designed, built and shipped.
  </h1>
</PageHeader>

<section class="border-surface-border border border-b-0">
  <ProjectList />
</section>

<style>
  @reference "@styles/main.css";
</style>
