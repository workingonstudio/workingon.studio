<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import ToggleMute from "./ToggleMute.svelte";
</script>

<div class="flex flex-row items-center gap-2 text-base">
  <iconify-icon icon="ph:waveform" class="text-primary size-6 text-2xl"></iconify-icon>
  <div class="flex flex-row items-center gap-2">
    tinywave <span class="text-muted/75 text-xxs relative top-[1.5px] hidden sm:flex">Audio to SVG</span>
  </div>
</div>
<div class="flex flex-row gap-3">
  <button
    type="button"
    class:invisible={recorder.isMuted}
    onclick={() => (recorder.isRecording ? recorder.stop() : recorder.start())}
    class="btn group {recorder.isRecording
      ? 'text-primary'
      : 'text-body'}  flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-bold uppercase transition-opacity disabled:pointer-events-none"
  >
    {recorder.isRecording ? "Stop" : "Rec"}
    <span
      class="size-2.5 rounded-full border {recorder.isRecording
        ? 'bg-primary border-rose-600 shadow-sm shadow-current'
        : 'border-slate-300 bg-slate-200 shadow-none'}"
    ></span>
  </button>
  <ToggleMute />
</div>

<style>
</style>
