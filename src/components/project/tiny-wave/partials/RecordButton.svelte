<script>
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<button
  type="button"
  class:hidden={recorder.isMuted}
  onclick={() => (recorder.isRecording ? recorder.stop() : recorder.start())}
  class="btn group {recorder.isRecording
    ? 'text-rose-600'
    : 'text-body'}  flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase transition-opacity disabled:pointer-events-none"
>
  <span
    class="size-2.5 rounded-full border {recorder.isRecording
      ? 'bg-primary border-rose-600 shadow-sm shadow-current'
      : 'border-slate-300 bg-slate-200 shadow-none'}"
  ></span>
  {recorder.isRecording ? "Stop" : "Rec"}
</button>
