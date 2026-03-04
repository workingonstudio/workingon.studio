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
      Started at agencies. Moved to startups fast. Been founding designer at multiple companies, survived acquisitions,
      and did 3 incubator batches. 500 Startups twice, TechStars once.
    </p>
    <p>
      Last role was at PartnerHero, building tools for support agents and managing a small design team. Built design
      systems that actually got used instead of gathering dust in Figma.
    </p>
    <p>
      Sixteen years in and I still build things on my own time. Not because I have to, because I can't not. The products
      on this site exist because I got frustrated with something and decided to fix it.
    </p>
    <p>
      I've watched the industry turn design into a performance. Metrics, frameworks, engagement theatre. I'm not
      interested in any of that. I'm interested in making things that work and that people actually want to use.
    </p>
    <p>
      Available for the right team. Contract at £500+/day. Open to full-time if it's worth it. I work best when I'm
      trusted to get on with it.
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
