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

<footer class="mt-12 flex flex-col items-center justify-between border-t-1 border-slate-900 py-6 md:flex-row">
  <!-- prettier-ignore -->
  <div class="flex flex-row items-center gap-2">
    <a href="/" class="group text-primary text-md font-display">wo<span class="flicker text-muted text-xxs">.studio</span></a>
    <a href="/"><small class="uppercase text-muted text-xxs">workingonstudio ltd, no: 12345678</small></a>
  </div>
  <ul class="text-muted flex flex-row gap-6">
    {#each links as { icon, href, text }}
      <li class="flex flex-row items-center">
        <a {href} class="text-xxs flex gap-2 uppercase">
          <iconify-icon {icon} class="text-sm"></iconify-icon>
          {text}
        </a>
      </li>
    {/each}
  </ul>
</footer>

<style>
  @reference "@styles/global.css";
  footer {
    a {
      @apply hover:text-primary transition-all delay-100;
    }
    .flicker {
      @apply text-shadow-glow motion-safe:animate-flicker text-yellow-300;
    }
  }
</style>
