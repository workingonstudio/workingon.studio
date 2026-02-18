<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex flex-col items-center gap-6">
  <div
    class="relative flex h-32 w-full flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-3"
  >
    <div class="absolute top-3 right-3">
      <ul class="text-xxs flex flex-row gap-2 font-bold">
        <li
          class="flex flex-row items-center gap-1 rounded-full border border-gray-300 bg-white px-2 py-0.5 uppercase tabular-nums"
        >
          {recorder.formattedTime}
        </li>
      </ul>
    </div>

    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" class="w-full" aria-hidden="true">
      {#if recorder.livePath && !recorder.isMuted}
        <path d={recorder.livePath} stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" />
      {:else}
        <line
          x1="0"
          y1="50"
          x2="800"
          y2="50"
          stroke="currentColor"
          stroke-width="2"
          opacity="20%"
          stroke-linecap="round"
        />
      {/if}
    </svg>
  </div>
  {#if recorder.finalPath}
    <div class="flex flex-row justify-center gap-3">
      <button
        type="button"
        onclick={() => recorder.downloadSvg()}
        class="btn flex flex-row gap-2 px-4 py-3 text-xs font-bold disabled:opacity-40"
      >
        <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
        Download SVG
      </button>
      <button
        type="button"
        onclick={() => recorder.copyToClipboard()}
        class="btn flex flex-row gap-2 px-4 py-3 text-xs font-bold disabled:opacity-40"
      >
        <iconify-icon icon="ph:copy-bold" class="text-base"></iconify-icon>
        Copy to Clipboard
      </button>
    </div>
  {/if}
</div>

<style></style>
