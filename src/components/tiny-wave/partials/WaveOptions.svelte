<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import ToolTip from "./ToolTip.svelte";
</script>

<div class="flex flex-row justify-center gap-3">
  <ToolTip content="Download">
    <button
      type="button"
      onclick={() => recorder.downloadSvg()}
      class="btn text-muted hover:text-body flex size-8 items-center justify-center"
    >
      <iconify-icon icon="ph:download-simple-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>

  <ToolTip content="Copy to Clipboard">
    <button
      type="button"
      onclick={() => recorder.copyToClipboard()}
      class="btn text-muted hover:text-body flex size-8 items-center justify-center"
    >
      <iconify-icon icon="ph:copy-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>

  <ToolTip content="Delete">
    <button
      type="button"
      onclick={() => recorder.reset()}
      class="btn text-muted hover:text-primary flex size-8 items-center justify-center"
    >
      <iconify-icon icon="ph:trash-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>
</div>
