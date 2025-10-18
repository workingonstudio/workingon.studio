<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = DateTime.fromISO(timelineData.generated).toFormat("ccc',' dd LLL y TT ZZZ");

  let links = [
    {
      icon: "carbon:development",
      href: "/",
      text: "astro + svelte",
    },
    {
      icon: "carbon:data-analytics",
      href: "https://umami.is/",
      text: "umami",
    },
    {
      icon: "carbon:text-font",
      href: "https://www.atipofoundry.com/fonts/nudica",
      text: "nudica + nudica mono",
    },
    {
      icon: "carbon:update-now",
      href: "https://github.com/workingonstudio/workingon.studio",
      text: date,
    },
  ];
</script>

<footer
  class="mt-12 flex flex-col justify-between gap-2 border-t-1 border-slate-900 py-6 lg:flex-row lg:items-center lg:gap-0"
>
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
  <a href="https://github.com/workingonstudio/workingon.studio">
    last updated: {DateTime.fromISO(date).toFormat("ccc',' dd LLL y TT ZZZ")}
  </a>
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16700615"
    class="order-last flex flex-row items-center justify-center gap-1 md:order-first md:justify-normal"
  >
    <iconify-icon icon="material-symbols:copyright-outline-rounded" class="text-sm"></iconify-icon>
    <span>workingonstudio ltd, no: 16700615</span>
  </a>
=======
>>>>>>> Stashed changes
  <!-- prettier-ignore -->
  <div class="flex flex-col">
    <a href="/" class="group text-primary text-md font-display -mb-1">wo<span class="flicker text-muted text-xxs">.studio</span></a>
    <a href="/"><small class="uppercase text-muted text-xxs">workingonstudio ltd, no: 12345678</small></a>
  </div>
  <ul class="text-muted flex flex-row gap-x-6 gap-y-2 last:flex-wrap last:lg:flex-nowrap">
    {#each links as { icon, href, text }}
      <li class="flex flex-row items-center">
        <a {href} class="text-xxs flex gap-2 uppercase">
<<<<<<< Updated upstream
          <iconify-icon {icon} class="text-sm"></iconify-icon>
=======
          <span class="h-3.5 w-3.5">
            <iconify-icon {icon} class="text-sm"></iconify-icon>
          </span>
>>>>>>> Stashed changes
          {text}
        </a>
      </li>
    {/each}
  </ul>
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
</footer>

<style>
  @reference "@styles/global.css";
  footer {
    a,
    small {
      @apply hover:text-primary transition-all delay-100;
    }
    .flicker {
      @apply text-shadow-glow motion-safe:animate-flicker text-yellow-300;
    }
  }
</style>
