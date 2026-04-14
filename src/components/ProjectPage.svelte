<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";

  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<ContentPanel borderBottom>
  <h1>
    {daysSince} days passed.
    <br />
    11 projects, still going.
  </h1>
</ContentPanel>

<PageLayout>
  <div class="border-surface-border border-b lg:border-0">
    <ContentPanel>
      <p>
        Some of these are practical tools. Plugins, extensions, utilities. Others are cultural mirrors, products that
        expose the performance and absurdity hiding in plain sight on the internet.
      </p>
      <p>All of them started with a frustration. All of them shipped.</p>
    </ContentPanel>
  </div>

  <div class="divide-surface-border divide-y">
    <ProjectList />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
  a {
    @apply underline;
  }
</style>
