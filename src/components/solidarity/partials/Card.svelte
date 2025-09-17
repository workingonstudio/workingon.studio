<script lang="ts">
  export let src: string;
  export let height: number;
  export let width: number;
  export let itemNumber: number;
  export let overlay: boolean;

  function getItemClasses(itemNumber: number): string {
    if (itemNumber === 4) return "center-item absolute top-32 left-1/2 z-10";
    return `circle-item-${itemNumber} absolute top-32 left-1/2`;
  }

  let checkItemNumber = itemNumber === 4 ? "shadow-lg shadow-stone-900/10" : "";
  $: itemAlign = getItemClasses(itemNumber);

  $: sizeClass = width === 64 ? "w-16 h-16" : width === 128 ? "w-32 h-32 shadow" : "";
</script>

<div class={itemAlign}>
  {#if overlay}
    <img src="/solidarity/otw-overlay.png" class="overlay absolute {sizeClass} rounded-full" />
  {/if}
  <img {src} alt="" {width} {height} class="rounded-full border-transparent {checkItemNumber}" />
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
</style>
