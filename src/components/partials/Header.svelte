<script lang="ts">
  import Logo from "./Logo.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    document.addEventListener("astro:before-swap", () => {
      showMenu = false;
    });
  });

  export let currentPath = "/";

  function isActive(path: string) {
    const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
    const normalizedPath = path.replace(/\/$/, "") || "/";
    return normalizedCurrent === normalizedPath;
  }
  function toggleMenu() {
    showMenu = !showMenu;
  }

  $: showMenu = false;

  // Close the mobile menu whenever the route changes (handles both full
  // page loads and persisted islands under client-side routing).
  $: if (currentPath) {
    showMenu = false;
  }

  $: if (typeof document !== "undefined") {
    document.body.style.overflow = showMenu ? "hidden" : "";
  }

  let navItems = [
    {
      href: "/about",
      title: "about",
      description: "the long answer.",
      icon: "chats-circle",
    },
    {
      href: "/projects/",
      title: "projects",
      description: "live studio projects.",
      icon: "cube",
    },
    {
      href: "/writing",
      title: "writing",
      description: "opinions, not takes.",
      icon: "pen-nib",
    },
    {
      href: "/progress",
      title: "progress",
      description: "every update, every change.",
      icon: "git-merge",
    },
    {
      href: "/contact",
      title: "contact",
      description: "let's talk.",
      icon: "paper-plane-tilt",
    },
  ];
</script>

<header class="group background bg-main relative z-110 flex flex-row items-center gap-24 px-4 py-9 lg:p-9">
  <a href="/" title="Home" class="group/logo text-body flex items-center justify-center">
    <Logo width={24} />
  </a>
  <div class="flex flex-1 flex-row items-center justify-between">
    <nav>
      <ul class="hidden flex-row gap-6 lg:flex">
        {#each navItems as { href, title }}
          <li class="group" class:active={isActive(href)}>
            <a {href}>
              {title}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
    <div class="flex flex-row items-start gap-4 lg:items-center">
      <ThemeToggle />
      <button
        type="button"
        onclick={toggleMenu}
        aria-label="Toggle menu"
        class="hover:*:text-primary flex size-4 cursor-pointer lg:hidden"
      >
        <iconify-icon icon="ph:{showMenu ? 'x-bold' : 'list'}" class="text-muted size-4"></iconify-icon>
      </button>
    </div>
  </div>
</header>

<nav
  class="{showMenu
    ? 'flex'
    : 'hidden'} mobile-nav background bg-main fixed inset-0 z-100 h-dvh flex-col items-center justify-center lg:hidden"
>
  <ul class="flex w-full flex-col gap-12">
    {#each navItems as { href, title }}
      <li class="group text-center" class:active={isActive(href)}>
        <a {href} onclick={toggleMenu}>
          <div class="flex flex-col">
            <h2>{title}</h2>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  @reference "@styles/main.css";
  h2 {
    @apply text-base font-medium;
  }

  header nav {
    ul {
      li {
        @apply flex flex-row items-center transition-opacity duration-300;
        a {
          @apply text-sm capitalize;
        }
      }
    }
    /* When hovering, fade everything except the hovered item */
    &:has(li:hover) li:not(:hover) {
      @apply opacity-50 delay-100;
    }

    /* When NOT hovering, fade non-active items */
    &:not(:has(li:hover)):has(li.active) li:not(.active) {
      @apply opacity-50;
    }
  }

  .mobile-nav {
    ul {
      &:has(li.active) li:not(.active) {
        @apply opacity-100;
      }
    }
    li {
      @apply transition-opacity duration-300;
      a {
        @apply flex flex-col items-center gap-1;
      }
    }
  }
</style>
