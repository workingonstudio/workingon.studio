<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
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

<footer
  class="mt-12 flex flex-col justify-between gap-2 border-t-1 border-gray-200/50 py-6 lg:flex-row lg:items-center lg:gap-0"
>
  <!-- prettier-ignore -->
  <div class="flex flex-col company-info">
    <a href="/" class="group text-primary text-md font-display">wo<span class="text-muted text-xxs">.studio</span></a>
    <a href="https://find-and-update.company-information.service.gov.uk/company/16700615"><small class="uppercase text-muted text-xxs">workingonstudio ltd, no: 16700615</small></a>
  </div>
  <ul class="text-muted flex flex-row gap-x-6 gap-y-2 last:flex-wrap last:lg:flex-nowrap">
    <li class="flex flex-row items-center gap-2">
      <div class="flex h-3.5 w-3.5">
        <iconify-icon icon="carbon:development" class="text-sm"></iconify-icon>
      </div>
      <a href="https://astro.build/">astro</a>
      <div class="relative -top-[1px]">+</div>
      <a href="https://svelte.dev/">Svelte</a>
    </li>
    <li class="flex flex-row items-center gap-2">
      <div class="flex h-3.5 w-3.5">
        <iconify-icon icon="carbon:data-analytics" class="text-sm"></iconify-icon>
      </div>
      <a href="https://umami.is/" class="">Umami</a>
    </li>
    <li class="flex flex-row items-center gap-2">
      <div class="flex h-3.5 w-3.5">
        <iconify-icon icon="carbon:text-font" class="text-sm"></iconify-icon>
      </div>
      {#each typefaces as { family, href }, index}
        <a {href} class="">{family}</a>
        {#if index < typefaces.length - 1}
          <div class="relative -top-[1px]">+</div>
        {/if}
      {/each}
    </li>
    <li class="flex flex-row items-center gap-2">
      <div class="flex h-3.5 w-3.5">
        <iconify-icon icon="carbon:update-now" class="text-sm"></iconify-icon>
      </div>
      <a href="https://github.com/workingonstudio/workingon.studio/commits/main/">{date}</a>
    </li>
  </ul>
</footer>

<style>
  @reference "@styles/main.css";
  footer ul {
    li {
      a {
        @apply hover:text-primary;
        @apply text-xxs flex font-bold uppercase;
      }
    }
  }
</style>
