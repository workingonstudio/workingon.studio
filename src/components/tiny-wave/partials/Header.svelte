<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import ToggleMute from "./ToggleMute.svelte";
</script>

<div class="flex flex-row items-center gap-2 text-base">
  <iconify-icon icon="ph:waveform" class="text-primary size-6 text-2xl"></iconify-icon>
  tinywave
</div>
<div class="flex flex-row gap-3">
  <ToggleMute />
  <button
    type="button"
    disabled={!recorder.canRecord || recorder.isMuted}
    class="btn group text-primary disabled:text-body tranision-colors flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold uppercase disabled:pointer-events-none disabled:opacity-70"
  >
    <span
      class="bg-primary group-disabled:bg-body size-2.5 rounded-full border border-rose-600 ring ring-rose-200 group-disabled:border-gray-300 group-disabled:ring-0"
    ></span>
    Rec
  </button>
</div>

<style>
</style>
