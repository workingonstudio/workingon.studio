<script lang="ts">
  let iconName: string;
  let isOpen: boolean = false;
  $: iconName = isOpen ? "close-small-outline-rounded" : "menu-rounded";

  function openMenu() {
    isOpen = !isOpen;
  }
</script>

<nav class="flex-row items-center gap-4 {isOpen ? 'open' : 'close hidden lg:flex'}">
  <ul class="text-body flex flex-row gap-6 rounded-full bg-stone-100 px-6 text-xs">
    <li><a href="/projects/sketch-today/about">About</a></li>
    <li><a href="/projects/sketch-today/faq">FAQ</a></li>
    <li><a href="/projects/sketch-today/contact">Contact</a></li>
  </ul>
</nav>
<button
  type="button"
  aria-label="Toggle navigation"
  class="group flex p-2 pr-0 lg:hidden"
  on:click|preventDefault={openMenu}
>
  <div class="buttonWrapper flex flex-col items-center justify-center">
    <iconify-icon icon="material-symbols:{iconName}" class="text-body group-hover:text-main text-lg"></iconify-icon>
  </div>
</button>

<style>
  @reference "@styles/sketch-today.css";
  .buttonWrapper {
    @apply cursor-pointer rounded-lg border border-stone-100 bg-stone-100 p-1 group-hover:border-stone-200;
  }
  nav {
    @apply transition-all duration-200;
    &.open {
      @apply absolute top-12 right-0;
      ul {
        @apply flex-col gap-3 rounded-lg p-4 text-right;
        a {
          @apply py-1;
        }
      }
    }
    a {
      @apply hover:text-main font-bold;
      @apply block py-3;
    }
  }
</style>
