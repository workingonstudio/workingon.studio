<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import PageLayout from "@components/partials/PageLayout.svelte";
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
  <h1>
    I <span class="underline">design</span>
    ,
    <span class="underline">build</span>
    , and
    <span class="underline">ship</span>
    software. Sixteen years designing products. Five exits. Looking for teams that ship.
  </h1>
</PageHeader>

<PageLayout>
  <!-- Left column: right border desktop, bottom border mobile only -->
  <div class="divide-y-surface panel-border-r border-b lg:border-b-0">
    <About borderBottom />
    <WorkHistory borderBottom />
    <ArticleList header="Writing" {articles} />
  </div>

  <!-- Right column: just dividers -->
  <div class="divide-y-surface">
    <ProjectList borderBottom />
    <SocialProfiles />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
