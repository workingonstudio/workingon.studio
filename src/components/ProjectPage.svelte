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

<section class="border-surface-border grid grid-cols-2 border border-b-0">
  <div class="border-surface-border border-r">
    <div class="border-surface-border flex flex-col gap-5 border-b px-16 py-12">
      <p>I've spent the last {daysSince} days, designing and shipping these projects.</p>
      <p>
        Some are fun experiments that expose corporate performance culture. Others are practical tools for <a href="">
          Sketch
        </a>
        and
        <a href="">Figma</a>
        -
        <a href="">Glyph Palette</a>
        is officially recognised by Sketch.
      </p>
      <!-- prettier-ignore -->
      <p>
        Currently building: <a href="">When to Work</a>, a simpler way to find overlap with remote colleagues across timezones.
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
