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
    Sixteen years designing products. Five exits. Give me a problem worth solving.
  </h1>
</ContentPanel>

<PageLayout>
  <!-- Left column -->
  <div class="divide-surface-border divide-y">
    <About />
    <WorkHistory />
    <div class="hidden md:block">
      <ArticleList header="Writing" {articles} />
    </div>
    <div class="hidden md:block">
      <SocialProfiles borderBottom />
    </div>
  </div>

  <!-- Right column -->
  <div class="divide-surface-border divide-y">
    <ProjectList />
    <div class="flex md:hidden">
      <ArticleList header="Writing" {articles} />
    </div>
    <div class="flex md:hidden">
      <SocialProfiles />
    </div>
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
