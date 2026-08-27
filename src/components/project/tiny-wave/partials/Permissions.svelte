<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<section class="squircle-3xl flex flex-col justify-between gap-6 bg-gray-100 p-6 lg:flex-row">
  <div class="flex flex-col">
    <h2 class="color-body text-sm font-bold">Allow permissions to get started.</h2>
    <p class="text-muted text-xs">
      This doesn’t work without permission to hear you. It needs access to your microphone.
    </p>
  </div>
  <button
    type="button"
    onclick={() => recorder.handleMicClick()}
    class="text-body cursor-pointer rounded-full border-0 bg-gray-200 px-4 py-1.5 text-xs font-semibold hover:bg-gray-300/60"
  >
    Allow access
  </button>
</section>
