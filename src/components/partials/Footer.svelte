<script lang="ts">
  import { onMount } from "svelte";
  import { DateTime } from "luxon";
  // timeline.json is restamped on every build by timeline:generate
  import timelineData from "../../data/timeline.json";

  const generated = DateTime.fromISO(timelineData.generated);

  // Deterministic on the server so hydration matches, relative once mounted
  let date = generated.setZone("utc").setLocale("en-GB").toFormat("d LLL yyyy");

  onMount(() => {
    const tick = () => {
      date = generated.setLocale("en-GB").toRelative() ?? date;
    };
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  });

  export let typefaces = [
    {
      family: "General Sans",
      href: "https://fontshare.com/fonts/general-sans",
    },
    {
      family: "Azeret Mono",
      href: "https://fontshare.com/fonts/azeret-mono",
    },
  ];
</script>

<footer class="flex flex-col gap-1 md:flex-row">
  <a
    href="#top"
    aria-label="Back to top"
    class="group hidden w-16 flex-col items-center justify-center transition-none md:flex"
  >
    <iconify-icon icon="ph:arrow-up-bold" class="text-muted group-hover:text-primary"></iconify-icon>
  </a>
  <!-- prettier-ignore -->
  <div class="md:flex flex-1 flex-col gap-1 md:justify-end py-6 px-9 text-muted text-end text-xxs uppercase">
    <a
      href="https://find-and-update.company-information.service.gov.uk/company/16700615"
      class=""
    >
      workingonstudio ltd, no: 16700615
    </a>

    <ul class="hidden md:flex flex-col md:flex-row gap-3 justify-end">
      <li class="flex flex-row items-center gap-1">
        <a href="https://astro.build/">Astro</a>
        <div class="relative -top-px">+</div>
        <a href="https://svelte.dev/">Svelte</a>
      </li>
      <li class="flex flex-row items-center gap-1">
        <a href="https://umami.is/" class="">Umami</a>
      </li>
      <li class="flex flex-row items-center gap-1">
        {#each typefaces as { family, href }, index}
          <a {href} class="">{family}</a>
          {#if index < typefaces.length - 1}
            <div class="relative -top-px">+</div>
          {/if}
        {/each}
      </li>
      <!-- prettier-ignore -->
      <li class="flex flex-row items-center">
        <a href="https://github.com/workingonstudio/workingon.studio/commits/main/">Last build: <time datetime={timelineData.generated} class="ml-1">{date}</time></a>
      </li>
    </ul>
  </div>
</footer>

<style>
  @reference "@styles/main.css";
  footer ul {
    li {
      a {
        @apply hover:text-primary hover:underline;
      }
    }
  }
</style>
