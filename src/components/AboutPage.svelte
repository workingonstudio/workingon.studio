<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
</script>

<ContentPanel borderBottom>
  <h1>
    The longer answer.
    <br />
    Sixteen years of it.
  </h1>
</ContentPanel>

<PageLayout>
  <ContentPanel>
    <p>
      Founding designer at multiple companies, survived acquisitions, three incubator batches. 500 Startups twice,
      TechStars once.
    </p>

    <p>
      Last role was PartnerHero. Building tools for support agents, managing a small design team, building design
      systems that actually got used instead of gathering dust in Figma.
    </p>

    <p>
      Sixteen years in and I still build things on my own time. The products on this site exist because I got frustrated
      with something and decided to fix it.
    </p>

    <p>
      I've watched the industry turn design into a performance. Metrics, frameworks, engagement theatre. I'm not
      interested in any of that. I'm interested in making things that work and that people actually want to use.
    </p>
    <!-- prettier-ignore -->
    <p>
      Available now. Contract or full-time. If you ship more than you meet, 
      <a
        href="/contact"
        class="underline hover:no-underline"
      >we'll get on</a>.
    </p>
  </ContentPanel>

  <div class="divide-surface-border divide-y">
    <WorkHistory />
    <SocialProfiles />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
