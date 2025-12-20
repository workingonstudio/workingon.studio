<script lang="ts">
  import Icon from "./Icon.svelte";
  import Badge from "./Badge.svelte";
  import { DateTime } from "luxon";

  export let productChangelogs;
</script>

<section class=" my-6 flex flex-col justify-between md:flex-row">
  <div class="flex flex-col gap-6">
    <Icon icon="update-rounded" />
    <h1>Changelog</h1>
    <p class="text-xl">Updates. Fixes. Additions. Improvements.</p>
  </div>
  <ul class="flex w-1/2 flex-col gap-8">
    {#each productChangelogs as { date, title, description, version, items }}
      <li class="flex w-full flex-col">
        <div class="flex flex-row items-center justify-between">
          <Badge label={"v" + version.major + "." + version.minor + "." + version.patch} />
          <time datetime={date}>{DateTime.fromJSDate(date).toLocaleString({ month: "short", day: "numeric" })}</time>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  @reference "@styles/glyph-palette.css";
  time {
    @apply text-muted text-xxs uppercase;
  }
</style>
