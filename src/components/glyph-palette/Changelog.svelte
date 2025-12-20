<script lang="ts">
  import Icon from "./Icon.svelte";
  import Badge from "./Badge.svelte";
  import { DateTime } from "luxon";

  export let productChangelogs;
</script>

<section class="my-6 flex flex-col justify-between gap-6 md:flex-row md:gap-0">
  <div class="top-60 flex flex-col items-center gap-6 text-center md:sticky md:h-fit md:items-start md:text-left">
    <Icon icon="update-rounded" />
    <h1>Changelog.</h1>
    <p class="text-xl">Updates. Fixes. Additions. Improvements.</p>
  </div>
  <ul class="flex flex-col gap-6 md:w-1/2">
    {#each productChangelogs.toReversed() as { date, title, description, version, items }}
      <li class="entry flex w-full flex-col gap-4">
        <div class="flex flex-row items-center justify-between">
          <Badge label={"v" + version.major + "." + version.minor + "." + version.patch} />
          <time datetime={date}>{DateTime.fromJSDate(date).toLocaleString({ month: "short", day: "numeric" })}</time>
        </div>
        <div>
          <h4>{title}</h4>
        </div>
        <ul class="features">
          {#each items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>

<style>
  @reference "@styles/glyph-palette.css";
  time {
    @apply text-muted text-xxs uppercase;
  }
  .entry {
    @apply rounded-2xl bg-gray-100 p-6;
  }

  .features {
    li {
      @apply text-body text-sm before:mr-2 before:content-['─'];
    }
  }
</style>
