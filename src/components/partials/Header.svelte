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
    },
    {
      href: "/projects/",
      title: "projects",
      description: "live studio projects.",
    },
    {
      href: "/writing",
      title: "writing",
      description: "opinions, not takes.",
    },
    {
      href: "/progress",
      title: "progress",
      description: "every update, every change.",
    },
    {
      href: "/contact",
      title: "contact",
      description: "bother me with admin.",
    },
  ];
</script>

<header
  class="group relative z-110 flex flex-row items-stretch justify-between transition-opacity duration-200 ease-out"
>
  <a href="/" title="Home" class="flex w-16 flex-col items-center py-6 transition-none lg:justify-center">
    <Logo width={27} />
  </a>

  <nav
    class="nav-scroll divide-x-muted/20 border-surface-border box-border flex-1 flex-col border-x p-8 text-xs lg:flex lg:px-16 lg:py-0"
    class:!border-transparent={showMenu}
  >
    <ul class="hidden lg:flex lg:flex-row">
      {#each navItems as { href, title, description }}
        <li class="group" class:active={isActive(href)}>
          <a {href}>
            <!-- prettier-ignore -->
            <h2>{title}</h2>
            <p class="transition-all duration-200 ease-out lg:hidden xl:block">{description}</p>
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="flex flex-row items-start gap-4 p-6 lg:items-center">
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
</header>

<nav
  class="{showMenu
    ? 'flex'
    : 'hidden'} mobile-nav bg-bg-main fixed inset-0 z-100 h-dvh flex-col items-center justify-center lg:hidden"
>
  <ul class="flex w-full flex-col gap-12">
    {#each navItems as { href, title, description }}
      <li class="group text-center" class:active={isActive(href)}>
        <a {href} onclick={toggleMenu}>
          <!-- prettier-ignore -->
          <h2>{title}</h2>
          <p class="transition-all duration-200 ease-out">{description}</p>
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
      @apply justify-between gap-12;
      li {
        @apply flex flex-row items-center transition-opacity duration-300 lg:py-6;
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

    /* When NOT hovering, fade non-active items */
    &:not(:has(li:hover)):has(li.active) li:not(.active) {
      @apply opacity-30;
    }
  }

  .mobile-nav {
    ul {
      &:has(li.active) li:not(.active) {
        @apply opacity-30;
      }
    }
    li {
      @apply transition-opacity duration-300;
      a {
        @apply flex flex-col items-center gap-1;
      }
      p {
        @apply text-body text-muted text-xs;
      }
    }
  }
</style>
