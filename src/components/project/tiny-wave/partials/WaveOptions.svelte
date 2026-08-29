<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex flex-row justify-center gap-3">
  <button type="button" onclick={() => recorder.downloadSvg()} aria-label="Download">
    <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
  </button>
  <button type="button" onclick={() => recorder.copyToClipboard()} aria-label="Copy to Clipboard">
    <iconify-icon
      icon={recorder.isCopied ? "ph:check-bold" : "ph:copy-bold"}
      class="text-base {recorder.isCopied ? 'text-emerald-500' : ''}"
    ></iconify-icon>
  </button>
  <button type="button" onclick={() => recorder.reset()} aria-label="Delete">
    <iconify-icon icon="ph:trash-bold" class="text-base"></iconify-icon>
  </button>
</div>

<style>
  @reference "@styles/tiny-wave.css";
  button {
    @apply flex size-8 cursor-pointer items-center justify-center rounded-full border-transparent bg-gray-100 hover:bg-gray-200;
    @apply text-muted hover:text-body;
    @apply transition-colors duration-150;
  }
</style>
