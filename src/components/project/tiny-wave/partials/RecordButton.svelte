<script>
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<button
  type="button"
  disabled={recorder.isMuted}
  onclick={() => (recorder.isRecording ? recorder.stop() : recorder.start())}
  class="btn group {recorder.isRecording
    ? 'text-rose-600'
    : 'text-body'} flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase transition-opacity disabled:cursor-not-allowed disabled:text-gray-400"
>
  <span
    class="size-2.5 rounded-full border {recorder.isRecording
      ? 'bg-primary border-rose-600 shadow-sm shadow-current'
      : 'border-rose-300 bg-rose-600 shadow-none'} group-disabled:border-rose-100 group-disabled:bg-rose-300"
  ></span>
  {recorder.isRecording ? "Stop" : "Rec"}
</button>
