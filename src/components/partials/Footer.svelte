<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  import Logo from "./Logo.svelte";
  let date = DateTime.fromISO(timelineData.generated).toFormat("ccc',' dd LLL y TT ZZZ");

  export let typefaces = [
    {
      family: "Satoshi",
      href: "https://www.fontshare.com/fonts/satoshi",
    },
    {
      family: "Inter",
      href: "https://rsms.me/inter/",
    },
  ];
</script>

<footer class="border-t-surface-border flex flex-row border-t">
  <!-- prettier-ignore -->
  <div class="flex flex-col justify-center items-center w-16 transition-none">
  </div>
  <div class="border-surface-border flex flex-1 flex-row justify-between border-x px-8 py-3 font-medium lg:px-16">
    <a
      href="https://find-and-update.company-information.service.gov.uk/company/16700615"
      class="text-muted text-xxs uppercase"
    >
      workingonstudio ltd, no: 16700615
    </a>

    <ul class="text-muted text-xxs hidden flex-row gap-3 lg:flex">
      <li class="flex flex-row items-center gap-1">
        <a href="https://astro.build/">Astro</a>
        <div class="relative -top-[1px]">+</div>
        <a href="https://svelte.dev/">Svelte</a>
      </li>
      <li class="flex flex-row items-center gap-1">
        <a href="https://umami.is/" class="">Umami</a>
      </li>
      <li class="flex flex-row items-center gap-1">
        {#each typefaces as { family, href }, index}
          <a {href} class="">{family}</a>
          {#if index < typefaces.length - 1}
            <div class="relative -top-[1px]">+</div>
          {/if}
        {/each}
      </li>
      <li class="flex flex-row items-center gap-2">
        <a href="https://github.com/workingonstudio/workingon.studio/commits/main/">{date}</a>
      </li>
    </ul>
  </div>
  <a href="#" aria-label="Back to top" class="flex w-16 flex-col items-center justify-center transition-none">
    <iconify-icon icon="ph:arrow-up-bold"></iconify-icon>
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
