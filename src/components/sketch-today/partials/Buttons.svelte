<script lang="ts">
  export let links;
</script>

<div class="options flex flex-row gap-3">
  <a href="/" class="hover:text-main bg-main flex flex-row text-white">
    <!-- prettier-ignore -->
    <iconify-icon icon="heroicons:arrow-down-tray-16-solid" class="text-base"></iconify-icon>
    <span>Download</span>
  </a>
  <a href="/" class="hover:text-main text-main flex flex-row">
    <!-- prettier-ignore -->
    <iconify-icon icon="heroicons:arrow-top-right-on-square-16-solid" class="text-base"></iconify-icon>
    <span>Workspace</span>
  </a>
  <a href="/" class="hover:text-main text-main flex flex-row">
    <!-- prettier-ignore -->
    <iconify-icon icon="heroicons:code-bracket-16-solid" class="text-base"></iconify-icon>
    <span>Github</span>
  </a>
  <a href="/" class="hover:text-main text-main flex flex-row">
    <!-- prettier-ignore -->
    <iconify-icon icon="heroicons:link-16-solid" class="text-base"></iconify-icon>
    <span>tailwind.com</span>
  </a>
  <a href="/" class="hover:text-main text-main flex flex-row">
    <!-- prettier-ignore -->
    <iconify-icon icon="heroicons:share-16-solid" class="text-base"></iconify-icon>
    <span>Share</span>
  </a>
</div>

<style>
  @reference "@styles/sketch-today.css";
  a {
    @apply items-center gap-3 rounded-lg px-3 py-3 text-xs font-semibold transition-colors duration-300 hover:bg-stone-100;
  }
</style>
