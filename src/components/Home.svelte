<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    I <span class="underline">design</span>, <span class="underline">build</span>, and <span class="underline">ship</span> software, browser extensions, and plugins. Some solve problems. Some expose them.
  </h1>
</PageHeader>

<section class="flex flex-col gap-24 2xl:mt-6">
  <h2>projects.</h2>
  <ProjectList />
  <h2>writing.</h2>
  <ArticleList />
</section>

<style>
  @reference "@styles/main.css";
  h2 {
    @apply text-4xl/18 md:text-6xl;
  }
</style>
