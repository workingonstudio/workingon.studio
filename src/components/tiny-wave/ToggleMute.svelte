<script lang="ts">
  let icon = $state("ph:microphone-slash-fill");

  function toggleMute() {
    icon = icon === "ph:microphone-slash-fill" ? "ph:microphone-fill" : "ph:microphone-slash-fill";
  }
</script>

<button type="button" onclick={toggleMute} aria-label="mute" class="btn flex size-8 items-center justify-center">
  <iconify-icon {icon} class="text-body size-4 text-base"></iconify-icon>
</button>

<style>
  @reference "@styles/tiny-wave.css";
</style>
