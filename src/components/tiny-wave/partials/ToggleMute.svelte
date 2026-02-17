<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<button
  type="button"
  onclick={() => recorder.handleMicClick()}
  aria-label={recorder.isMuted ? "Unmute microphone" : "Mute microphone"}
  class="btn flex size-8 items-center justify-center"
>
  <iconify-icon
    icon={recorder.isMuted ? "ph:microphone-slash-fill" : "ph:microphone-fill"}
    class="text-body size-4 text-base"
  ></iconify-icon>
</button>

<style>
  @reference "@styles/tiny-wave.css";
</style>
