<script lang="ts">
  export let currentPath = "/";

  function isActive(path: string) {
    return currentPath === path;
  }

  function toggleMenu() {
    showMenu = !showMenu;
  }

  let scrolled: boolean = false;
  function handleScroll() {
    scrolled = window.scrollY > 0;
  }

  let showMenu = false;

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
      icon: "carbon:flagging-taxi",
      href: "/contact",
      title: "hire",
      subtitle: ".me",
      description: "bother me with admin.",
    },
  ];

  let socials = [
    {
      icon: "simple-icons:substack",
      title: "Follow on Substack",
      href: "https://https://aquietfracture.substack.com/",
      style: "text-sm",
    },

    {
      icon: "simple-icons:github",
      title: "Follow on Github",
      href: "https://github.com/workingonstudio",
      style: "text-md",
    },
  ];
</script>

<svelte:window on:scroll={handleScroll} />

<div class="sticky top-0 bg-gray-950/80 backdrop-blur-sm">
  <!-- prettier-ignore -->
  <header class="group flex flex-row items-center justify-between transition-all duration-200 {scrolled ? 'py-4' : 'py-4 md:py-12'}">
    <a href="/" class="cursor-pointer">
      <!-- prettier-ignore -->
      <h1 class="font-display inline-block {scrolled ? 'text-sm' : 'text-xl'}">workingon<span>.studio</span></h1>
    </a>
    <div class="social flex flex-row gap-4">
      {#each socials as { icon, href, title, style }}
        <a {href} aria-label={title} {title} class="items-center hidden lg:flex justify-center w-6 h-6">
          <iconify-icon {icon} class={style}></iconify-icon>
        </a>
      {/each}
      <button type="button" onclick={toggleMenu} class="hover:*:text-primary w-6 h-6 cursor-pointer flex lg:hidden">
        <iconify-icon icon="carbon:{showMenu ? 'close-large' : 'menu'}" class=" text-2xl text-gray-500"></iconify-icon>
      </button>
    </div>
  </header>
  <nav
    class="{showMenu
      ? 'flex'
      : 'hidden'} flex-col items-start border-y-1 border-slate-900 transition-all duration-300 lg:flex {scrolled
      ? 'py-4'
      : 'py-6'} text-xs"
  >
    <ul class="flex w-full flex-col lg:flex-row">
      {#each navItems as { icon, href, title, subtitle, description }}
        <li class="group {isActive(href) ? 'active' : ''}">
          <iconify-icon {icon} class="flex h-[18px] w-[18px] text-lg text-gray-500 lg:hidden xl:flex"></iconify-icon>
          <a {href} onclick={toggleMenu}>
            <!-- prettier-ignore -->
            <h2>{title}<span>{subtitle}</span></h2>
            <p class="transition-all duration-200">{description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  @reference "@styles/global.css";
  h1 {
    @apply text-xl;
  }
  h2 {
    @apply text-base;
  }
  h1 span {
    @apply text-shadow-glow motion-safe:animate-flicker sm:group-hover:text-shadow-glow sm:group-hover:motion-safe:animate-flicker text-sm text-yellow-300 sm:text-gray-500 sm:text-shadow-none sm:group-hover:text-yellow-300 sm:motion-safe:animate-none;
  }

  h2 span {
    @apply group-hover:text-shadow-glow group-hover:motion-safe:animate-flicker text-xs text-gray-500 group-hover:text-yellow-300;
  }

  nav {
    ul {
      @apply justify-between gap-6;
      li {
        @apply flex flex-row items-center gap-4 transition-opacity duration-300;
        a {
          @apply flex w-full flex-col justify-between gap-1;
          p {
            @apply text-body text-xs;
          }
        }
        /* Active state styles - only when not hovering anything */
        &.active h2 span {
          @apply text-shadow-glow motion-safe:animate-flicker text-yellow-300;
        }
      }
    }
    /* When hovering, fade everything except the hovered item */
    &:has(li:hover) li:not(:hover) {
      @apply opacity-30 delay-100;
    }

    /* When hovering, remove active styles from active item if it's not being hovered */
    &:has(li:hover) li.active:not(:hover) h2 span {
      @apply text-gray-500 text-shadow-none motion-safe:animate-none;
    }

    /* When NOT hovering, fade non-active items */
    &:not(:has(li:hover)):has(li.active) li:not(.active) {
      @apply opacity-30;
    }
  }

  .social {
    a {
      @apply text-muted;
      &:hover {
        @apply text-primary transition-colors duration-300;
      }
    }
  }
</style>
