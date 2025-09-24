<script lang="ts">
  import { fade } from "svelte/transition";
  let { src, height, width, itemNumber, overlay } = $props();

  function getItemClasses(itemNumber: number): string {
    if (itemNumber === 4) return "center-item absolute top-32 left-1/2 z-10";
    return `circle-item-${itemNumber} absolute top-32 left-1/2`;
  }

  let checkItemNumber = $derived(itemNumber === 4 ? "shadow-lg shadow-stone-900/10" : "");
  let itemAlign = $derived(getItemClasses(itemNumber));
  let sizeClass = $derived(width === 64 ? "w-16 h-16" : width === 128 ? "w-32 h-32 shadow" : "");
</script>

<div class={itemAlign}>
  {#if overlay}
    <img
      src="/solidarity/otw-overlay.png"
      class="overlay absolute {sizeClass} fade-spin-scale-in rounded-full"
      out:fade={{ duration: 1000 }}
    />
  {/if}
  <img {src} alt="avatar" {width} {height} class="rounded-full border-transparent {checkItemNumber}" />
</div>

<style>
  @reference "@styles/solidarity.css";
  /* Center item - position from top */
  .center-item {
    transform: translate(-50%, -32px);
  }

  .circle-item-0 {
    transform: translate(-50%, -130px);
  }
  .circle-item-1 {
    transform: translate(calc(-50% + 92px), -92px);
  }
  .circle-item-2 {
    transform: translate(calc(-50% + 130px), 0px);
  }
  .circle-item-3 {
    transform: translate(calc(-50% + 92px), 92px);
  }
  .circle-item-5 {
    transform: translate(-50%, 130px);
  }
  .circle-item-6 {
    transform: translate(calc(-50% - 92px), 92px);
  }
  .circle-item-7 {
    transform: translate(calc(-50% - 130px), 0px);
  }
  .circle-item-8 {
    transform: translate(calc(-50% - 92px), -92px);
  }

  .shadow {
    box-shadow:
      0 83px 23px 0 rgba(105, 105, 105, 0),
      0 53px 21px 0 rgba(105, 105, 105, 0.01),
      0 30px 18px 0 rgba(105, 105, 105, 0.05),
      0 13px 13px 0 rgba(105, 105, 105, 0.09),
      0 3px 7px 0 rgba(105, 105, 105, 0.1);
  }

  .fade-spin-scale-in {
    animation: fadeSpinScaleIn 700ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }

  @keyframes fadeSpinScaleIn {
    from {
      opacity: 0;
      transform: rotate(90deg);
    }
    to {
      opacity: 1;
      transform: rotate(0deg);
    }
  }
</style>
