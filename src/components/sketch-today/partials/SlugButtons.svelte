<script lang="ts">
  export let links;
  let iconset = "heroicons:";

  function getIcon(value: string) {
    switch (value) {
      case "download":
        return iconset + "arrow-down-tray-16-solid";
      case "workspace":
        return iconset + "arrow-top-right-on-square-16-solid";
      case "github":
        return iconset + "code-bracket-16-solid";
      case "source":
        return iconset + "link-16-solid";
    }
  }
</script>

<div class="options flex flex-row gap-3">
  {#each Object.entries(links) as [value, link]}
    <a href="" class={value}>
      <iconify-icon icon={getIcon(value)} class="text-base"></iconify-icon>
      <span>{value}</span>
    </a>
  {/each}
  <a href="">
    <iconify-icon icon="heroicons:share-16-solid" class="text-base"></iconify-icon>
    <span>share</span>
  </a>
</div>

<style>
  @reference "@styles/sketch-today.css";
  a {
    @apply items-center gap-3 rounded-lg px-3 py-3 hover:bg-stone-100;
    @apply hover:text-main text-main flex flex-row;
    @apply transition-colors duration-300;
    @apply text-xs font-semibold capitalize;
    &:first-child {
      @apply bg-main hover:text-main text-white hover:bg-stone-100;
    }
  }
</style>
