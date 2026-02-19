<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import { animate, svg } from "animejs";

  let pathElement: SVGPathElement | undefined = $state();
  let dotElement: HTMLDivElement | undefined = $state();
  let lastProcessedPath = "";
  let isAnimating = $state(false);

  $effect(() => {
    if (recorder.finalPath && recorder.finalPath !== lastProcessedPath && pathElement && dotElement) {
      lastProcessedPath = recorder.finalPath;
      isAnimating = true;

      pathElement.id = "waveform-path";

      const [drawable] = svg.createDrawable("#waveform-path");

      animate(drawable, {
        draw: ["0 0", "0 1"],
        duration: 3000,
        ease: "inOutQuad",
        onComplete: () => {
          isAnimating = false;
          if (dotElement) {
            dotElement.style.opacity = "0";
          }
        },
      });

      // Get the starting point of the path
      const pathData = pathElement.getPointAtLength(0);

      // Set initial position
      dotElement.style.transform = `translateX(${pathData.x}px) translateY(${pathData.y}px)`;

      animate(dotElement, {
        ...svg.createMotionPath("#waveform-path"),
        duration: 3000,
        ease: "inOutQuad",
      });
    }
  });

  $effect(() => {
    if (recorder.status === "recording") {
      lastProcessedPath = "";
      isAnimating = false;
      if (dotElement) {
        dotElement.style.opacity = "1";
      }
    }
  });
</script>

<div class="flex flex-col items-center gap-6">
  <div class="justify-center-center flex w-full flex-col gap-2 rounded-xl border border-gray-300 bg-white p-3">
    <div class="relative">
      <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" class="w-full" aria-hidden="true">
        {#if recorder.finalPath}
          <path
            bind:this={pathElement}
            d={recorder.finalPath}
            stroke="currentColor"
            fill="none"
            stroke-width={recorder.finalStrokeWidth}
            stroke-linecap="round"
          />
        {:else if recorder.livePath && !recorder.isMuted}
          <path d={recorder.livePath} stroke="currentColor" fill="none" stroke-width="3" stroke-linecap="round" />
        {:else}
          <line
            x1="0"
            y1="50"
            x2="800"
            y2="50"
            stroke="currentColor"
            stroke-width="3"
            opacity="20%"
            stroke-linecap="round"
          />
        {/if}
      </svg>

      {#if recorder.finalPath}
        <div
          bind:this={dotElement}
          class="absolute -top-1 -left-1 size-2 rounded-full border border-rose-600 bg-rose-500 shadow-sm shadow-rose-500"
        ></div>
      {/if}
    </div>
  </div>

  {#if recorder.finalPath}
    <div class="flex flex-row justify-center gap-3">
      <button
        type="button"
        onclick={() => recorder.downloadSvg()}
        class="btn text-muted hover:text-body flex size-8 items-center justify-center"
      >
        <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
      </button>
      <button
        type="button"
        onclick={() => recorder.copyToClipboard()}
        class="btn text-muted hover:text-body flex size-8 items-center justify-center"
      >
        <iconify-icon icon="ph:copy-bold" class="text-base"></iconify-icon>
      </button>
      <button
        type="button"
        onclick={() => recorder.reset()}
        class="btn text-muted hover:text-primary flex size-8 items-center justify-center"
      >
        <iconify-icon icon="ph:trash-bold" class="text-base"></iconify-icon>
      </button>
    </div>
  {/if}
</div>

<style></style>
