<script lang="ts">
  import ToolTip from "./ToolTip.svelte";
</script>

<div class="flex flex-row justify-center gap-3">
  <ToolTip content="Sine Wave">
    <button type="button" class="btn text-muted hover:text-body flex size-8 items-center justify-center">
      <iconify-icon icon="ph:wave-sine-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>
  <ToolTip content="Bar Wave">
    <button type="button" class="btn text-muted hover:text-body flex size-8 items-center justify-center">
      <iconify-icon icon="ph:waveform-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>
  <ToolTip content="Square Wave">
    <button type="button" class="btn text-muted hover:text-body flex size-8 items-center justify-center">
      <iconify-icon icon="ph:wave-square-bold" class="text-base"></iconify-icon>
    </button>
  </ToolTip>
</div>
