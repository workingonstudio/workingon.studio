<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { DateTime } from "luxon";
  import ProjectList from "./partials/ProjectList.svelte";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>
    {daysSince} days passed.
    <br />
    8 projects, designed, built and shipped.
  </h1>
</PageHeader>

<section
  class="border-surface-border grid-1 grid min-h-screen border-0 border-b-0 md:border md:border-b-0 lg:grid-cols-2"
>
  <div class="border-surface-border border-0 lg:border-r">
    <div class="border-surface-border content flex flex-col gap-5 border-b">
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
    </div>
  </div>
  <ProjectList />
</section>

<style>
  @reference "@styles/main.css";
  a {
    @apply underline;
  }
</style>
