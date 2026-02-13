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

<section class="border-surface-border grid-1 grid border border-b-0 lg:grid-cols-2">
  <div class="border-surface-border border-0 lg:border-r">
    <!-- prettier-ignore -->
    <div class="flex flex-col gap-5 content border-b border-surface-border">
      <p>
        16 years building for the internet. Started at agencies. Moved to startups fast.
      </p>
      <p>Been founding designer at multiple companies. Survived acquisitions. Did 3 incubator batches (500 Startups x2 & TechStars). Wore every hat there is.</p>
      <p>
        Last real job was at PartnerHero building tools for support agents and managing a small design team. Built design systems that actually worked instead of gathering dust in Figma.
      </p>
      <p>Now I build tools that work and make you question why you needed them. Cultural mirrors for the internet.</p>
      <p>
        I also work with teams that ship fast and trust their designers. Contract at £500+/day. Open to full-time for the right thing. Don't drag me into every meeting either way.
      </p>
    </div>
  </div>
  <div class="divide-surface-border flex flex-col divide-y">
    <WorkHistory />
    <SocialProfiles />
  </div>
</section>

<style>
  @reference "@styles/main.css";
</style>
