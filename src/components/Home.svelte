<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import About from "./partials/About.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
  import ArticleList from "./partials/ArticleList.svelte";

  export let articles: Array<{
    slug: string;
    title: string;
    description?: string;
  }>;

  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    I <span class="underline">design</span>, <span class="underline">build</span>, and <span class="underline">ship</span> software. Sixteen years designing products. Five exits. Looking for teams that ship.
  </h1>
</PageHeader>

<section
  class="border-surface-border grid-1 grid min-h-screen border-0 border-b-0 md:border md:border-b-0 lg:grid-cols-2"
>
  <div class="divide-surface-border border-surface-border divide-y-1 border-r-0 border-b lg:border-r lg:border-b-0">
    <About />
    <WorkHistory />
    <ArticleList header="Writing" {articles} />
  </div>
  <div class="divide-surface-border divide-y-1">
    <ProjectList />
    <SocialProfiles />
  </div>
</section>

<style>
  @reference "@styles/main.css";
</style>
