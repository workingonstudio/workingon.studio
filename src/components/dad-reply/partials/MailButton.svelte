<script lang="ts">
  import Icon from "@components/Icon.svelte";
  export let iconName: string | undefined = undefined;
  export let text: string = "";
</script>

<button class="google-button flex max-h-9 items-center px-4 py-2 text-sm font-medium [&_span]:mr-3">
  {#if iconName}
    <Icon name={iconName} class_="mr-3 text-[18px]" />
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
