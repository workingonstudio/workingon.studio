<script lang="ts">
  import ToolTip from "./ToolTip.svelte";
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex flex-row justify-center gap-3">
  <ToolTip content="Download">
    <button
      type="button"
      onclick={() => recorder.downloadSvg()}
      aria-label="Download"
      class="btn text-muted hover:text-body flex size-8 items-center justify-center"
    >
      <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>

  <ToolTip content={recorder.isCopied ? "Copied" : "Copy to Clipboard"} closeOnPointerDown={false}>
    <button
      type="button"
      onclick={() => recorder.copyToClipboard()}
      aria-label="Copy to Clipboard"
      class="btn text-muted hover:text-body flex size-8 items-center justify-center"
    >
      <iconify-icon
        icon={recorder.isCopied ? "ph:check-bold" : "ph:copy-bold"}
        class="text-base {recorder.isCopied ? 'text-emerald-500' : ''}"
      ></iconify-icon>
    </button>
  </ToolTip>

  <ToolTip content="Delete">
    <button
      type="button"
      onclick={() => recorder.reset()}
      aria-label="Delete"
      class="btn text-muted hover:text-primary flex size-8 items-center justify-center"
    >
      <iconify-icon icon="ph:trash-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>
</div>
