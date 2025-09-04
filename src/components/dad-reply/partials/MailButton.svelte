<script lang="ts">
  export let icon: string | undefined = undefined;
  export let text: string = "";
</script>

<button
  class="google-button flex items-center text-sm font-medium py-2 px-4 [&_span]:mr-3 max-h-9"
>
  {#if icon}
    <span class="material-symbols-rounded">{icon}</span>
  {:else}
    <span>👍</span>
  {/if}
  {text}
</button>

<style>
  @reference "$styles/dad-reply.css";
  .google-button {
    font-family: "Google Sans", sans-serif;
    color: #444746;
    @apply border border-[#747775] rounded-full;
    &:hover {
      @apply bg-slate-100 cursor-pointer;
    }
  }
</style>
