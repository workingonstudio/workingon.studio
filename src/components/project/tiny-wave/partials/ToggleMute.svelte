<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<button
  type="button"
  onclick={() => recorder.handleMicClick()}
  aria-label={recorder.isMuted ? "Unmute microphone" : "Mute microphone"}
>
  <iconify-icon
    icon={recorder.isMuted ? "ph:microphone-slash-fill" : "ph:microphone-fill"}
    class="size-4 text-base"
  ></iconify-icon>
</button>

<style>
  @reference "@styles/tiny-wave.css";
  button {
    @apply flex size-8 cursor-pointer items-center justify-center rounded-full border-transparent bg-gray-100 hover:bg-gray-200/50;
    @apply text-muted hover:text-body;
    @apply transition-colors duration-150;
  }
</style>
