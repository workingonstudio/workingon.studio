<script lang="ts">
  import RecordButton from "./RecordButton.svelte";
  import ToggleMute from "./ToggleMute.svelte";
</script>

<div class="flex flex-row items-center justify-center gap-3">
  <ToggleMute />
  <RecordButton />
  <button type="button" aria-label="Monitor" class="invisible">
    <iconify-icon icon="ph:sliders-bold" class="size-4 text-base"></iconify-icon>
  </button>
</div>

<style>
  @reference "@styles/tiny-wave.css";
  button {
    @apply flex size-8 cursor-pointer items-center justify-center rounded-full border-transparent bg-gray-100 hover:bg-gray-200/50;
    @apply text-muted hover:text-body;
    @apply transition-colors duration-150;
  }
</style>
