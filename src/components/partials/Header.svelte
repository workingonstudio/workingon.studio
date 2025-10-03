<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut, cubicInOut } from "svelte/easing";

  export let text: string;
  let headerText: string;
  let dotText: string;

  function grabHeader(text: string) {
    let stringLength = text.length;
    headerText = text.slice(0, text.indexOf("."));
    dotText = text.slice(text.indexOf("."), stringLength);
  }

  let isClosed = true;
  $: icon = isClosed ? "carbon:add" : "carbon:close";

  let isSpinning = false;

  function toggleMenu() {
    isSpinning = true;
    setTimeout(() => {
      isClosed = !isClosed;
    }, 200);
    setTimeout(() => {
      isSpinning = false;
    }, 400);
  }

  grabHeader(text);

  let navItems = [
    {
      icon: "carbon:delivery-parcel",
      href: "/projects/",
      title: "projects",
      subtitle: ".list",
      description: "live studio projects.",
    },
    {
      icon: "carbon:piggy-bank-slot",
      href: "/finances",
      title: "finances",
      subtitle: ".csv",
      description: "financials coming in/out of the studio.",
    },
    {
      icon: "carbon:branch",
      href: "/progress",
      title: "progress",
      subtitle: ".git",
      description: "every update, every change.",
    },
  ];
</script>

<div class="sticky top-0 space-y-6 bg-gray-950/80 py-8 backdrop-blur-sm">
  <header class="group flex flex-row items-center justify-between">
    <a href="/" class="cursor-pointer">
      <!-- prettier-ignore -->
      <h1 class="font-display inline-block">{headerText}<span>{dotText}</span></h1>
    </a>
    <button type="button" onclick={toggleMenu}>
      <iconify-icon
        {icon}
        class="text-2xl text-gray-500 transition-colors duration-500 hover:cursor-pointer hover:text-gray-100 {isSpinning
          ? 'spinning'
          : ''}"
      ></iconify-icon>
    </button>
  </header>
  {#if !isClosed}
    <nav
      class="flex flex-col items-start text-xs"
      in:slide={{ duration: 300, easing: cubicOut }}
      out:slide={{ duration: 300, easing: cubicInOut, delay: 250 }}
    >
      <ul
        class="flex w-full flex-col gap-4"
        in:fade={{ duration: 300, easing: cubicOut, delay: 250 }}
        out:fade={{ duration: 300, easing: cubicInOut }}
      >
        {#each navItems as { icon, href, title, subtitle, description }}
          <li class="group">
            <iconify-icon {icon} class="text-lg text-gray-500"></iconify-icon>
            <a {href}>
              <!-- prettier-ignore -->
              <h2>{title}<span>{subtitle}</span></h2>
              <p>{description}</p>
            </a>
          </li>
        {/each}
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
      @apply gap-6;
      li {
        @apply flex flex-row items-center gap-4 transition-opacity duration-300;
        a {
          @apply flex w-full flex-col justify-between gap-1;
          p {
            @apply text-body text-xs;
          }
        }
      }
    }
    &:has(li:hover) li:not(:hover) {
      @apply opacity-30 delay-100;
    }
  }

  button {
    @apply h-6 w-6;
  }

  .spinning {
    animation: spin-once 1000ms ease-in-out;
  }

  @keyframes spin-once {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
