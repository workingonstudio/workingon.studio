<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import About from "./partials/About.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    A decade and a bit building for the internet.
  </h1>
</PageHeader>

<section class="border-surface-border grid grid-cols-2 border border-b-0">
  <div class="border-surface-border border-r">
    <About />
  </div>
  <div class="divide-surface-border flex flex-col divide-y">
    <WorkHistory />
    <SocialProfiles />
  </div>
</section>

<style>
  @reference "@styles/main.css";
</style>
