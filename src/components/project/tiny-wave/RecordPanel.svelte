<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import { animate, svg } from "animejs";
  import WaveOptions from "./partials/WaveOptions.svelte";
  import WaveStyles from "./partials/WaveStyles.svelte";

  let pathElement: SVGPathElement | undefined = $state();
  let dotElement: HTMLDivElement | undefined = $state();
  let clipRect: SVGRectElement | undefined = $state();
  let printBar: SVGRectElement | undefined = $state();
  let lastProcessedPath = "";
  let isAnimating = $state(false);

  $effect(() => {
    if (recorder.finalPath && recorder.finalPath !== lastProcessedPath) {
      lastProcessedPath = recorder.finalPath;
      isAnimating = true;

      if (recorder.wavePathName === "Bar") {
        // Clip-based reveal with sliding print head
        if (!clipRect || !printBar) return;

        clipRect.setAttribute("width", "0");
        printBar.setAttribute("x", "0");
        printBar.style.opacity = "1";

        animate(clipRect, {
          width: 800,
          duration: 3000,
          ease: "inOutQuad",
        });

        animate(printBar, {
          x: 797, // width="3", so 797 keeps the right edge flush with the 800 viewBox instead of overshooting to 803
          duration: 3000,
          ease: "inOutQuad",
          onComplete: () => {
            isAnimating = false;
            if (printBar) printBar.style.opacity = "0";
          },
        });
      } else {
        // Dot tracing animation for all other styles — unchanged, this already tracked correctly
        if (!pathElement || !dotElement) return;

        pathElement.id = "waveform-path";
        const [drawable] = svg.createDrawable("#waveform-path");

        animate(drawable, {
          draw: ["0 0", "0 1"],
          duration: 3000,
          ease: "inOutQuad",
          onComplete: () => {
            isAnimating = false;
            if (dotElement) dotElement.style.opacity = "0";
          },
        });

        const pathData = pathElement.getPointAtLength(0);
        dotElement.style.transform = `translateX(${pathData.x}px) translateY(${pathData.y}px)`;

        animate(dotElement, {
          ...svg.createMotionPath("#waveform-path"),
          duration: 3000,
          ease: "inOutQuad",
        });
      }
    }
  });

  $effect(() => {
    if (recorder.status === "recording") {
      lastProcessedPath = "";
      isAnimating = false;
      if (dotElement) dotElement.style.opacity = "1";
      if (printBar) printBar.style.opacity = "1";
    }
  });
</script>

<div class="relative flex w-full flex-col justify-center gap-2 overflow-hidden">
  {#if recorder.finalPath && recorder.wavePathName === "Bar"}
    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" class="w-full overflow-hidden" aria-hidden="true">
      <defs>
        <clipPath id="reveal-clip">
          <rect bind:this={clipRect} x="0" y="0" width="0" height="100" />
        </clipPath>
      </defs>
      <g clip-path="url(#reveal-clip)">
        <path
          d={recorder.finalPath}
          stroke="currentColor"
          fill="none"
          stroke-width={recorder.finalStrokeWidth}
          stroke-linecap="round"
        />
      </g>
      <rect
        bind:this={printBar}
        x="0"
        y="0"
        width="3"
        height="100"
        rx="2"
        class="text-primary fill-current"
        opacity="1"
      />
    </svg>
  {:else}
    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" class="w-full overflow-hidden" aria-hidden="true">
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
        <path d={recorder.livePath} stroke="#E5E7EB" fill="none" stroke-width="1.5" stroke-linecap="round" />
      {:else}
        <line x1="0" y1="50" x2="800" y2="50" stroke="#E5E7EB" stroke-width="1.5" stroke-linecap="round" />
      {/if}
    </svg>

    {#if recorder.finalPath}
      <div
        bind:this={dotElement}
        class="absolute -top-1 -left-1 size-2 rounded-full border border-rose-600 bg-rose-500 shadow-sm shadow-rose-500"
      ></div>
    {/if}
  {/if}
  {#if recorder.finalPath}
    <WaveOptions />
  {/if}
</div>

<style></style>
