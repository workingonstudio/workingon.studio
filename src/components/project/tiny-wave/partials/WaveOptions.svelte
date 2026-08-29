<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex flex-row justify-center gap-3">
  <button type="button" class="btn" onclick={() => recorder.copyToClipboard()} aria-label="Copy to Clipboard">
    <iconify-icon
      icon={recorder.isCopied ? "ph:check-bold" : "ph:copy-bold"}
      class="text-base {recorder.isCopied ? 'text-emerald-500' : ''}"
    ></iconify-icon>
    {recorder.isCopied ? "Copied" : "Copy"}
  </button>
  <button type="button" class="btn" onclick={() => recorder.downloadSvg()} aria-label="Download">
    <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
    Download
  </button>
  <button type="button" class="btn" onclick={() => recorder.reset()} aria-label="Delete">
    <iconify-icon icon="ph:arrow-arc-left-bold" class="text-base"></iconify-icon>
    Retry
  </button>
</div>

<style>
  @reference "@styles/tiny-wave.css";
  button {
    @apply hover:text-body flex flex-row items-center gap-2 px-4 py-3 text-xs font-semibold text-gray-500;
  }
</style>
