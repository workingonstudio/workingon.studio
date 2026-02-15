<script lang="ts">
  import Logo from "./Logo.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

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

  let navItems = [
    {
      href: "/about",
      title: "about",
      description: "more questions answered.",
    },
    {
      href: "/projects/",
      title: "projects",
      description: "live studio projects.",
    },
    {
      href: "/writing",
      title: "writing",
      description: "thoughts on design and creativity.",
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

<!-- prettier-ignore -->
<header class="group flex flex-row items-stretch justify-between transition-opacity ease-out duration-200">
  <a href="/" title="Home" class="flex flex-col items-center py-6 lg:justify-center w-16 transition-none">
      <Logo width={27} />
    </a>
    <nav
    class="nav-scroll box-border flex-col divide-x-muted/20 flex-1 p-8 lg:px-16 lg:py-0 text-xs lg:flex border-x border-surface-border"
    >
    <ul class="lg:flex flex-col lg:flex-row {showMenu
      ? 'flex'
      : 'hidden'}">
      {#each navItems as { href, title, description }}
        <li class="group" class:active={isActive(href)}>
          <a {href} onclick={toggleMenu}>
            <!-- prettier-ignore -->
            <h2>{title}</h2>
            <p class="transition-all duration-200 ease-out lg:hidden xl:block">{description}</p>
          </a>
        </li>
      {/each}
    </ul>
    </nav>
  
  <div class="flex flex-row gap-4 items-start lg:items-center p-6">
    <ThemeToggle />
    <button type="button" onclick={toggleMenu} aria-label="Toggle menu" class="hover:*:text-primary size-4 cursor-pointer flex lg:hidden">
      <iconify-icon icon="ph:{showMenu ? 'x-bold' : 'list'}" class="size-4 text-muted"></iconify-icon>
    </button>
  </div>
</header>

<style>
  @reference "@styles/main.css";
  h2 {
    @apply text-base font-medium;
  }

  nav {
    ul {
      @apply justify-between gap-3 lg:gap-12;
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
</style>
