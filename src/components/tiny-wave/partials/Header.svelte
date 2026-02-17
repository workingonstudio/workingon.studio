<script lang="ts">
  import ToggleMute from "./ToggleMute.svelte";
</script>

<div class="flex flex-row items-center gap-2 text-base">
  <iconify-icon icon="ph:waveform" class="text-primary size-6 text-2xl"></iconify-icon>
  tinywave
</div>
<button type="button" class="btn text-primary px-4 py-3 text-xs font-bold">Start Recording</button>
<ToggleMute />

<style>
</style>
