<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex flex-col items-center gap-6">
  <div class="flex w-full flex-col rounded-xl border border-gray-300 bg-white p-6">
    <div class="flex flex-row justify-end">
      <ul class="text-xxs flex flex-row gap-2 font-bold">
        <li class="flex flex-row items-center gap-1 rounded-full border border-gray-300 px-2 py-0.5 uppercase">
          {recorder.formattedTime}
        </li>
        <li class="flex flex-row items-center gap-1 rounded-full border border-gray-300 px-2 py-0.5 uppercase">
          <span class="size-2 rounded-full border border-rose-400 bg-rose-500"></span>
          Rec
        </li>
      </ul>
    </div>

    <svg viewBox="0 0 800 100" xmlns="http://www.w3.org/2000/svg" class="w-full" aria-hidden="true">
      {#if recorder.livePath}
        <path d={recorder.livePath} stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" />
      {:else}
        <line x1="0" y1="50" x2="800" y2="50" stroke="currentColor" stroke-width="2" opacity="0.2" />
      {/if}
    </svg>
  </div>

  <div class="flex flex-row justify-center gap-3">
    <button
      type="button"
      onclick={() => recorder.downloadSvg()}
      disabled={!recorder.finalPath}
      class="btn flex flex-row gap-2 px-4 py-3 text-xs font-bold disabled:opacity-40"
    >
      <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
      Download SVG
    </button>
    <button
      type="button"
      onclick={() => recorder.copyToClipboard()}
      disabled={!recorder.finalPath}
      class="btn flex flex-row gap-2 px-4 py-3 text-xs font-bold disabled:opacity-40"
    >
      <iconify-icon icon="ph:copy-bold" class="text-base"></iconify-icon>
      Copy to Clipboard
    </button>
  </div>
</div>

<style></style>
