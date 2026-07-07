<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import WorkHistory from "./partials/WorkHistory.svelte";
  import SocialProfiles from "./partials/SocialProfiles.svelte";
</script>

<ContentPanel borderBottom>
  <h1>Let me make the creative decisions so you can get on with what you do best.</h1>
</ContentPanel>

<PageLayout>
  <div>
    <ContentPanel borderBottom>
      <p>This studio is what happens after 15 years as the sole designer at a string of early-stage startups.</p>
      <p>
        Every one of those companies needed one person to handle everything. Brand, marketing, experience, photography,
        copy, SEO, pitch decks, dev handoff. That person was me.
      </p>
      <p>
        Somewhere in that process, the role stopped being designer and started being something harder to name. Creative
        director is the closest thing. The person who makes every creative decision and lives with the consequences.
      </p>
      <p>
        workingon.studio is where that plays out. For clients who need that kind of thinking, and in products built
        here.
      </p>
      <p>
        I've watched the industry turn design into a performance. Metrics, frameworks, theatre. We've been convinced
        there's only one way to do something. That data is the answer. That the process matters more than the outcome.
      </p>
      <p>It doesn't.</p>
      <p>
        I work directly with founders and their teams. Not as a pair of hands. As a guide. Someone who's been at the
        early stages enough times to know what matters, what doesn't, and when to move.
      </p>
      <p>You won't find that in a framework.</p>
      <p>
        Available now. Contract or full-time. If you ship more than you meet, <a
          href="/contact"
          class="underline hover:no-underline"
        >
          we'll get on
        </a>
        .
      </p>
    </ContentPanel>
  </div>
  <div>
    <ContentPanel>
      <img
        src="/profile.webp"
        alt="Paul Mackenzie, creative director, seated on a sofa in front of a print that reads 'This is the naughty corner.'"
        class="rounded-xl"
        loading="lazy"
      />
    </ContentPanel>
    <WorkHistory />
    <SocialProfiles />
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
