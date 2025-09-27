<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";
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

  let isClosed = true;
  $: icon = isClosed ? "carbon:menu" : "carbon:close-large";

  function toggleMenu() {
    isClosed = !isClosed;
  }

  grabHeader(text);
</script>

<div class="sticky top-0 space-y-6 bg-gray-950/80 py-8 backdrop-blur-sm">
  <header class="group flex flex-row items-center justify-between">
    <a href="/" class="cursor-pointer">
      <!-- prettier-ignore -->
      <h1 class="font-display inline-block">{headerText}<span>{dotText}</span></h1>
    </a>
    <iconify-icon
      onclick={toggleMenu}
      {icon}
      class="text-2xl text-gray-500 hover:cursor-pointer hover:text-gray-100"
    ></iconify-icon>
  </header>
  {#if !isClosed}
    <nav
      class="flex flex-col items-start text-xs"
      in:slide={{ duration: 300, easing: cubicOut }}
      out:slide={{ duration: 300, easing: cubicInOut }}
    >
      <ul
        class="w-full pb-4 *:py-3"
        in:fade={{ duration: 300, easing: cubicOut }}
        out:fade={{ duration: 300, easing: cubicInOut }}
      >
        <li class="group">
          <a href="projects/">
            <!-- prettier-ignore -->
            <h2>project<span>.list</span></h2>
          </a>
        </li>
        <li class="group">
          <a href="/finances">
            <!-- prettier-ignore -->
            <h2>finance<span>.log</span></h2>
            <div class="flex flex-row gap-2 {totalClass} items-center">
              <iconify-icon icon="carbon:piggy-bank-slot" class="text-lg"></iconify-icon>
              <span>{$totals.formatted}</span>
            </div>
          </a>
        </li>
        <li class="group">
          <a href="/progress">
            <!-- prettier-ignore -->
            <h2>progress<span>.log</span></h2>
            <div class="flex flex-row items-center gap-2 text-gray-500">
              <iconify-icon icon="carbon:version" class="text-lg"></iconify-icon>
              <span>{currentVersion}</span>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  {/if}
</div>

<style>
  @reference "@styles/global.css";
  h1,
  h2 {
    @apply text-base;
  }
  h1 span {
    @apply text-shadow-glow motion-safe:animate-flicker sm:group-hover:text-shadow-glow sm:group-hover:motion-safe:animate-flicker text-xs text-yellow-300 sm:text-gray-500 sm:text-shadow-none sm:group-hover:text-yellow-300 sm:motion-safe:animate-none;
  }

  h2 span {
    @apply group-hover:text-shadow-glow group-hover:motion-safe:animate-flicker text-xs text-gray-500 group-hover:text-yellow-300;
  }

  nav {
    ul {
      li {
        @apply flex flex-row;
        a {
          @apply flex w-full flex-row justify-between;
        }
      }
    }
  }
</style>
