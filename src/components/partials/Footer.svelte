<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = DateTime.fromISO(timelineData.generated).toRelative();

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

<footer class="flex flex-row">
  <!-- prettier-ignore -->
  <div class="flex flex-1 flex-row justify-between py-6 px-9.5 text-muted">
    <a
      href="https://find-and-update.company-information.service.gov.uk/company/16700615"
      class="text-muted text-xxs uppercase"
    >
      workingonstudio ltd, no: 16700615
    </a>

    <ul class=" text-xxs flex-row gap-3 flex">
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
        <a href="https://github.com/workingonstudio/workingon.studio/commits/main/">Last updated: {date}</a>
      </li>
    </ul>
  </div>
  <a href="#top" aria-label="Back to top" class="group flex w-16 flex-col items-center justify-center transition-none">
    <iconify-icon icon="ph:arrow-up-bold" class="text-muted group-hover:text-primary"></iconify-icon>
  </a>
</footer>

<style>
  @reference "@styles/main.css";
  footer ul {
    li {
      a {
        @apply hover:text-primary hover:underline;
        @apply text-xxs flex font-medium;
      }
    }
  }
</style>
