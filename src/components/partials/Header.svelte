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
      description: "more questions answered.",
    },
    {
      icon: "carbon:archive",
      href: "/projects/",
      title: "projects",
      description: "live studio projects.",
    },
    {
      icon: "carbon:piggy-bank-slot",
      href: "/finances",
      title: "finances",
      description: "financials in/out of the studio.",
    },
    {
      icon: "carbon:branch",
      href: "/progress",
      title: "progress",
      description: "every update, every change.",
    },
    {
      icon: "carbon:send-alt",
      href: "/contact",
      title: "contact",
      description: "bother me with admin.",
    },
  ];
</script>

<!-- prettier-ignore -->
<header class="group flex flex-row items-stretch justify-between transition-opacity ease-out duration-200 border-x border-surface-border">
  <a href="/" title="Home" class="flex flex-col justify-center p-4 lg:p-4 lg:py-0 transition-none">
      <Logo width={32} />
    </a>
    <nav
    class="{showMenu
      ? 'flex'
      : 'hidden'} nav-scroll box-border flex-col divide-x-muted/20 flex-1 px-6 text-xs lg:flex border-x border-surface-border"
    >
    <ul class="flex flex-col lg:flex-row">
      {#each navItems as { icon, href, title, description }}
        <li class="group" class:active={isActive(href)}>
          <iconify-icon {icon} class="text-muted flex size-4 lg:size-6 text-2xl lg:hidden xl:flex"></iconify-icon>
          <a {href} onclick={toggleMenu}>
            <!-- prettier-ignore -->
            <h2>{title}</h2>
            <p class="transition-all duration-200 ease-out">{description}</p>
          </a>
        </li>
      {/each}
    </ul>
    </nav>
  
  <div class="flex flex-row gap-4 items-center p-4">
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
      @apply justify-start gap-0 lg:gap-12;
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
