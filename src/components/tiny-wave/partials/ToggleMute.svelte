<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import ToolTip from "./ToolTip.svelte";
</script>

<ToolTip content={recorder.isMuted ? "Unmute" : "Mute"}>
  <button
    type="button"
    onclick={() => recorder.handleMicClick()}
    aria-label={recorder.isMuted ? "Unmute microphone" : "Mute microphone"}
    class="btn text-muted hover:text-body flex size-8 items-center justify-center"
  >
    <iconify-icon
      icon={recorder.isMuted ? "ph:microphone-slash-fill" : "ph:microphone-fill"}
      class="size-4 text-base"
    ></iconify-icon>
  </button>
</ToolTip>

<style>
  @reference "@styles/tiny-wave.css";
</style>
