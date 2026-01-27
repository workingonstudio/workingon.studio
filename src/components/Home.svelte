<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>I design, build, and ship software, browser extensions, and plugins. Some solve problems. Some expose them.</h1>
  <section class="flex max-w-xl flex-col gap-8">
    <p>I've shipped 8 products in {daysSince} days.</p>
    <p>Some solve actual problems. Others expose the absurdity of online culture. All of them work.</p>
  </section>
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
