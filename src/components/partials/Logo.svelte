<!-- Logo.svelte -->
<script lang="ts">
  import LogoSvg from "/logomark.svg?raw";

  export let width: number | string = 26;
  export let style: string = "";

  // Convert number to px, pass through strings as-is
  $: widthStyle = typeof width === "number" ? `${width}px` : width;
</script>

<div class="logo items-center {style}" style="width: {widthStyle};">
  {@html LogoSvg}
</div>

<style>
  .logo {
    transition: width 300ms ease-out;
  }

  .logo :global(svg) {
    width: 100%;
    height: auto;
    display: flex;
  }

  .logo :global(svg path) {
    fill: currentColor;
  }
</style>
