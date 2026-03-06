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
    <span class="underline">build</span>, and <span class="underline">ship</span>. Sixteen years designing products. Five exits. Looking for teams that actually do it.
  </h1>
</ContentPanel>

<PageLayout>
  <!-- Left column -->
  <div class="divide-surface-border divide-y">
    <About />
    <WorkHistory />
    <div class="hidden md:flex">
      <ArticleList header="Writing" {articles} />
    </div>
    <div class="hidden md:flex">
      <SocialProfiles />
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
