<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";

  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<ContentPanel borderLeft borderRight>
  <h1>
    {daysSince} days passed.
    <br />
    8 projects, designed, built and shipped.
  </h1>
</ContentPanel>

<PageLayout variant="full">
  <ContentPanel borderRight>
    <p>I've spent the last {daysSince} days, designing and shipping these projects.</p>
    <p>
      Some are fun experiments that expose corporate performance culture. Others are practical tools for
      <a href="https://figma.com">Figma</a>
      and
      <a href="https://sketch.com">Sketch</a>
      -
      <a href="https://glyphpalette.com">Glyph Palette</a>
      is officially recognised by Sketch.
    </p>
    <!-- prettier-ignore -->
    <p>
      Currently building: <a href="https://whento.work">When to Work</a>, a simpler way to find overlap with remote colleagues across timezones.
    </p>
    <p>Built with Svelte, compiled to vanilla JavaScript. Fast, lightweight, functional.</p>
  </ContentPanel>

  <ProjectList />
</PageLayout>

<style>
  @reference "@styles/main.css";
  a {
    @apply underline;
  }
</style>
