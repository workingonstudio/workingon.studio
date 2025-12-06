<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>I design, build, and ship digital tools that work. And make a point.</h1>
  <section class="flex max-w-xl flex-col gap-8">
    <p>
      This studio has existed for {daysSince} days and shipped 7 projects. With 3 more in the dry dock waiting to be deployed.
    </p>
    <p>They are a mixture of helpful tools and ones that aim directly at the status quo of online culture.</p>
    <p>So take a look. You might feel something.</p>
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
