<script lang="ts">
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";
  import Navigation from "./partials/Navigation.svelte";

  let iconName: string;
  let isOpen: boolean = false;
  $: iconName = isOpen ? "close-small-outline-rounded" : "menu-rounded";

  function openMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="sticky top-0 z-[1000] mb-2 flex w-full bg-white/80 shadow-sm shadow-white backdrop-blur-sm">
  <header class="mx-auto flex max-w-6xl flex-1 flex-col items-start lg:flex-row lg:items-center lg:justify-between">
    <div class="flex w-full flex-row justify-between lg:w-auto">
      <div class="flex flex-row items-center gap-4">
        <Logo />
        <div class="inline-flex items-center gap-2">
          <Badge text={"Pro Trial Edition"} bgColor="bg-orange-100" />
          <a href="/projects/dad-reply/changelog/" title="View Changelog" class="flex">
            <Badge text={"v1.5.3"} />
          </a>
        </div>
      </div>
      <button
        type="button"
        on:click|preventDefault={openMenu}
        aria-label="Toggle navigation"
        class="group flex cursor-pointer items-center rounded-lg border border-gray-300 p-1 transition-all duration-200 hover:border-transparent lg:hidden"
      >
        <iconify-icon
          icon="material-symbols:{iconName}"
          class="text-text-muted group-hover:text-text-body text-2xl"
        ></iconify-icon>
      </button>
    </div>
    <div class="flex w-full flex-row items-center gap-2 lg:w-auto">
      <Navigation {isOpen} onClose={openMenu} />
    </div>
  </header>
</div>

<style>
  @reference "@styles/dad-reply.css";
  header {
    @apply px-4 py-6 lg:py-10;
  }
</style>
