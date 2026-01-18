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
      icon: "carbon:idea",
      href: "/about",
      title: "about",
      subtitle: ".txt",
      description: "more questions answered.",
    },
    {
      icon: "carbon:archive",
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
      subtitle: ".mail",
      description: "bother me with admin.",
    },
  ];
</script>

<!-- prettier-ignore -->
<header class="group flex flex-row justify-between items-stretch transition-opacity ease-out duration-200">
  <div class="flex gap-6">
    <a href="/" title="Home" class="flex flex-col p-4 lg:px-4 lg:py-0 border-x border-surface-border transition-none justify-center">
      <Logo width={32} />
    </a>
    <nav
    class="{showMenu
      ? 'flex'
      : 'hidden'} nav-scroll box-border flex-col divide-x-muted/20 text-xs transition-all duration-300 ease-out lg:flex"
    >
    <ul class="flex w-full flex-col lg:flex-row">
      {#each navItems as { icon, href, title, subtitle, description }}
        <li class="group" class:active={isActive(href)}>
          <iconify-icon {icon} class="text-muted flex size-6 text-2xl lg:hidden xl:flex"></iconify-icon>
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
  <div class="flex flex-row gap-4 items-center border-x border-surface-border p-4">
    <ThemeToggle />
    <button type="button" onclick={toggleMenu} aria-label="Toggle menu" class="hover:*:text-primary w-6 h-6 cursor-pointer flex lg:hidden">
      <iconify-icon icon="carbon:{showMenu ? 'close-large' : 'menu'}" class=" text-2xl text-muted"></iconify-icon>
    </button>
  </div>
</header>

<style>
  @reference "@styles/main.css";
  h2 {
    @apply text-base font-normal;
  }

  h2 span {
    @apply text-muted text-xs;
  }

  nav {
    ul {
      @apply justify-between gap-0 lg:gap-12;
      li {
        @apply flex flex-row items-center gap-4 py-4 transition-opacity duration-300 lg:py-6;
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
</style>
