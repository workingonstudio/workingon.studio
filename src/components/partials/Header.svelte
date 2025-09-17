<script lang="ts">
  import Icon from "@components/Icon.svelte";
  import timelineData from "../../data/timeline-github.json";
  import { totals } from "../../stores/finance.js";

  $: totalClass = $totals.isPositive ? "!text-green-500" : "!text-red-500";
  export let text: string;
  let headerText: string;
  let dotText: string;
  let currentVersion = timelineData.entries.slice(-1).pop()?.version;

  function grabHeader(text: string) {
    let stringLength = text.length;
    headerText = text.slice(0, text.indexOf("."));
    dotText = text.slice(text.indexOf("."), stringLength);
  }

  grabHeader(text);
</script>

<header class="group sticky top-0 flex flex-row items-center justify-between bg-gray-950/80 py-8 backdrop-blur-sm">
  <a href="/" class="cursor-pointer">
    <!-- prettier-ignore -->
    <h1 class="font-display inline-block text-base">{headerText}<span>{dotText}</span></h1>
  </a>
  <nav class="flex flex-row items-center text-xs">
    <ul class="flex flex-row items-center space-x-4 *:inline-flex">
      <li>
        <a href="/projects/" data-astro-prefetch>
          <iconify-icon icon="carbon:network-3-reference" class="text-lg"></iconify-icon>
          projects
        </a>
      </li>
      <li>
        <a href="/finances" data-astro-prefetch class={totalClass}>
          <iconify-icon icon="carbon:piggy-bank-slot" class="text-lg"></iconify-icon>
          {$totals.formatted}
        </a>
      </li>
      <li>
        <a href="/progress" data-astro-prefetch>
          <iconify-icon icon="carbon:version" class="text-lg"></iconify-icon>
          {currentVersion}
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  @reference "@styles/global.css";
  h1 {
    span {
      @apply text-shadow-glow motion-safe:animate-flicker sm:group-hover:text-shadow-glow sm:group-hover:motion-safe:animate-flicker text-xs text-yellow-300 sm:text-gray-500 sm:text-shadow-none sm:group-hover:text-yellow-300 sm:motion-safe:animate-none;
    }
  }

  nav li {
    a {
      @apply flex flex-row gap-2 transition-colors ease-in-out;
      color: var(--color-text-muted);
      &:hover {
        color: var(--color-text-primary);
      }
    }
  }
</style>
