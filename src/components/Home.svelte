<script lang="ts">
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import PageLayout from "@components/partials/PageLayout.svelte";
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
</script>

<ContentPanel borderBottom>
  <!-- prettier-ignore -->
  <h1>
    I <span class="underline">design</span>,
    <span class="underline">build</span>, and <span class="underline">ship</span>
    software. Sixteen years designing products. Five exits. Looking for teams that ship.
  </h1>
</ContentPanel>

<PageLayout>
  <!-- Left column -->
  <div class="divide-surface-border divide-y">
    <About />
    <WorkHistory />
    <div class="border-surface-border border-b lg:border-0">
      <ArticleList header="Writing" {articles} />
    </div>
  </div>

  <!-- Right column -->
  <div class="divide-surface-border divide-y">
    <ProjectList />
    <SocialProfiles />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
