<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>I build tools that work. And make you question why you needed them.</h1>
  <section class="flex max-w-xl flex-col gap-8">
    <p>I've shipped 7 products in {daysSince} days.</p>
    <p>Some solve actual problems. Others expose the absurdity of online culture. All of them work.</p>
    <p>Pick one. It might make you uncomfortable.</p>
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
  h1 {
    @apply text-4xl/12 md:text-6xl/tight lg:text-8xl/tight;
  }
  h2 {
    @apply text-4xl/18 md:text-6xl;
  }
</style>
