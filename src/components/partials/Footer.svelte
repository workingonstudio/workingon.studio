<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = DateTime.fromISO(timelineData.generated).toFormat("ccc',' dd LLL y TT ZZZ");

  let links = [
    {
      icon: "carbon:tool-kit",
      href: "/",
      text: "astro",
    },
    {
      icon: "carbon:code",
      href: "https://svelte.dev/",
      text: "svelte",
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

<footer class="mt-12 flex flex-row items-center justify-between py-6">
  <!-- prettier-ignore -->
  <div class="flex flex-col gap-0.5">
    <a href="/" class="text-primary text-sm font-display">workingon<span class="text-muted text-xxs">.studio</span></a>
    <small class="text-xxs flex uppercase text-muted">workingonstudio ltd, no: 12345678</small>
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
  }
</style>
