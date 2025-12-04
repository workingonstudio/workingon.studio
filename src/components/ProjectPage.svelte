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
    6 projects shipped.
    <br />
    3 more in the dock.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>Things I made because I was tired of not seeing them. Each one works. That's the point.</p>
  </div>
</PageHeader>

<section class="mx-0 max-w-2xl md:mx-2 2xl:mt-5">
  <ProjectList />
</section>

<style>
  @reference "@styles/main.css";
</style>
