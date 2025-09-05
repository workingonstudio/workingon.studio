<script lang="ts">
  export let icon: string | undefined = undefined;
  export let text: string = "";
</script>

<button class="google-button flex max-h-9 items-center px-4 py-2 text-sm font-medium [&_span]:mr-3">
  {#if icon}
    <iconify-icon icon="material-symbols:{icon}" class="mr-3 text-[18px]"></iconify-icon>
  {:else}
    <span>👍</span>
  {/if}
  {text}
</button>

<style>
  @reference "@styles/dad-reply.css";
  .google-button {
    font-family: "Google Sans", sans-serif;
    color: #444746;
    @apply rounded-full border border-[#747775];
    &:hover {
      @apply cursor-pointer bg-slate-100;
    }
  }
</style>
