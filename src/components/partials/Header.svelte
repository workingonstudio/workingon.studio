<script lang="ts">
  import ThemeToggle from "./ThemeToggle.svelte";

  export let currentPath = "/";

  function isActive(path: string) {
    return currentPath === path;
  }

  function toggleMenu() {
    showMenu = !showMenu;
  }

  // Smooth scroll tracking
  let scrollProgress: number = 0;
  let ticking: boolean = false;

  const SCROLL_START = 0;
  const SCROLL_END = 50; // Distance in pixels to complete transition

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        // Calculate progress from 0 to 1
        scrollProgress = Math.min(Math.max((scrollY - SCROLL_START) / (SCROLL_END - SCROLL_START), 0), 1);
        ticking = false;
      });
      ticking = true;
    }
  }

  // Interpolate values based on scroll progress
  $: paddingY = 48 - scrollProgress * 24; // From 48px (py-12) to 24px (py-6)
  $: fontSize = 1.25 - scrollProgress * 0.25; // From text-xl (1.25rem) to text-base (1rem)

  $: showMenu = false;

  let navItems = [
    {
      icon: "carbon:idea",
      href: "/about",
      title: "about",
      subtitle: ".txt",
      description: "more questions answered.",
    },
    {
      icon: "carbon:box",
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
      description: "financials in/out of the studio.",
    },
    {
      icon: "carbon:branch",
      href: "/progress",
      title: "progress",
      subtitle: ".git",
      description: "every update, every change.",
    },
    {
      icon: "carbon:send-alt",
      href: "/contact",
      title: "contact",
      subtitle: ".me",
      description: "bother me with admin.",
    },
  ];
</script>

<svelte:window on:scroll={handleScroll} />

<div class="bg-bg-main" style="--padding-y: {paddingY}; --font-size: {fontSize};">
  <!-- prettier-ignore -->
  <header class="header-scroll group flex flex-row items-center border-b-1 border-muted/10 justify-between transition-all ease-out duration-200">
    <a href="/" class="cursor-pointer">
      <!-- prettier-ignore -->
      <h1 class="font-display font-medium inline-block header-title">workingon<span>.studio</span></h1>
    </a>
    <div class="flex flex-row gap-4 items-center">
      <ThemeToggle />
      <button type="button" onclick={toggleMenu} aria-label="Toggle menu" class="hover:*:text-primary w-6 h-6 cursor-pointer flex lg:hidden">
        <iconify-icon icon="carbon:{showMenu ? 'close-large' : 'menu'}" class=" text-2xl text-muted"></iconify-icon>
      </button>
    </div>
  </header>
  <nav
    class="{showMenu
      ? 'flex'
      : 'hidden'} nav-scroll border-muted/10 box-border flex-col items-start border-b-1 text-xs transition-all duration-300 ease-out lg:flex"
  >
    <ul class="flex w-full flex-col lg:flex-row">
      {#each navItems as { icon, href, title, subtitle, description }}
        <li class="group" class:active={isActive(href)}>
          <iconify-icon {icon} class="text-muted flex size-[18px] text-lg lg:hidden xl:flex"></iconify-icon>
          <a {href} onclick={toggleMenu}>
            <!-- prettier-ignore -->
            <h2>{title}<span>{subtitle}</span></h2>
            <p class="transition-all duration-200 ease-out">{description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  @reference "@styles/main.css";
  h1 {
    @apply text-xl;
  }
  h2 {
    @apply text-base font-normal;
  }
  h1 span {
    @apply text-muted text-sm;
  }

  h2 span {
    @apply text-muted text-xs;
  }

  nav {
    ul {
      @apply justify-between gap-6;
      li {
        @apply flex flex-row items-center gap-4 transition-opacity duration-300;
        a {
          @apply flex w-full flex-col justify-between;
          p {
            @apply text-body text-muted text-xs;
          }
        }
      }
    }
    /* When hovering, fade everything except the hovered item */
    &:has(li:hover) li:not(:hover) {
      @apply opacity-30 delay-100;
    }

    /* When hovering, remove active styles from active item if it's not being hovered */
    &:has(li:hover) li.active:not(:hover) h2 span {
      @apply text-muted text-shadow-none motion-safe:animate-none;
    }

    /* When NOT hovering, fade non-active items */
    &:not(:has(li:hover)):has(li.active) li:not(.active) {
      @apply opacity-30;
    }
  }

  .header-scroll {
    padding-top: calc(var(--padding-y) * 1px);
    padding-bottom: calc(var(--padding-y) * 1px);
    transition: all 300ms ease-out;
  }

  .header-title {
    font-size: calc(var(--font-size) * 1rem);
    transition: all 300ms ease-out;
  }

  .nav-scroll {
    @apply py-6;
    transition: all 300ms ease-out;
  }
</style>
