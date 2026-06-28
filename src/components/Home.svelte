<script lang="ts">
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ProjectList from "./partials/ProjectList.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import About from "./partials/About.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
  import ArticleList from "./partials/ArticleList.svelte";

  type Project = {
    slug: string;
    title: string;
    description: string;
    link: string;
    externalLink: boolean;
    image: string;
    featured: boolean;
    publishedAt: string;
    download: string | null;
    body: string;
  };

  let {
    articles,
    projects,
  }: {
    articles: Array<{ slug: string; title: string; description?: string }>;
    projects: Project[];
  } = $props();
</script>

<ContentPanel borderBottom>
  <h1>
    Creative director.
    <br />
    15 years leading design and creative for startups, five of them acquired.
  </h1>
</ContentPanel>

<PageLayout>
  <div>
    <About />
    <div class="lg:hidden">
      <ProjectList {projects} />
    </div>
    <WorkHistory />
    <ArticleList header="Writing" {articles} />
    <SocialProfiles />
  </div>
  <div class="hidden lg:block">
    <ProjectList {projects} />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
