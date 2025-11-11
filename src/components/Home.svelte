<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  import ArticleList from "./partials/ArticleList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>Holding a social mirror to the hellscape that is the modern internet.</h1>
  <section class="flex max-w-xl flex-col gap-12">
    <p>
      This studio has existed for {daysSince} days and shipped 5 projects. With 3 more in the dry dock waiting to be deployed.
    </p>
    <p>Combined they’ve garnered well over 500k impressions. Impressive.</p>
    <p>I couldn’t give a shit.</p>
  </section>
</PageHeader>

<section class="flex max-w-2xl flex-col gap-24 2xl:mt-6">
  <h2>projects</h2>
  <ProjectList />
  <h2>writing</h2>
  <ArticleList />
</section>

<style>
  @reference "@styles/main.css";
  h1 {
    @apply text-4xl/12 md:text-8xl/36;
  }
  h2 {
    @apply text-3xl md:text-7xl;
  }
</style>
