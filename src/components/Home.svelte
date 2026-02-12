<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import About from "./partials/About.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    I <span class="underline">design</span>, <span class="underline">build</span>, and <span class="underline">ship</span> software, browser extensions, and plugins. Some solve problems. Some expose them.
  </h1>
</PageHeader>

<section class="border-surface-border divide-surface-border grid grid-cols-2 divide-x-1 border border-b-0">
  <div class="divide-surface-border divide-y-1">
    <About />
    <WorkHistory />
    <SocialProfiles />
  </div>
  <div class="divide-surface-border divide-y-1">
    <ProjectList />
    <ArticleList />
  </div>
</section>

<style>
  @reference "@styles/main.css";
</style>
