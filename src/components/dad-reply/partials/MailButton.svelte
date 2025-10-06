<script lang="ts">
  import Emoji from "./Emoji.svelte";

  let {
    iconName = undefined,
    text = "",
    type = "click",
    href = "",
    clickable = undefined,
    disabled = false,
    onclick = () => {},
  }: {
    iconName?: string;
    text?: string;
    type?: "email" | "click";
    href?: string;
    clickable?: boolean;
    disabled?: boolean;
    onclick?: () => void;
  } = $props();

  const emailConfig = {
    to: "hello@workingon.studio",
    subject: "Studio Inquiry",
    body: "👍",
  };

  function handleClick() {
    if (type === "email") {
      const { to, subject, body } = emailConfig;
      window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else if (clickable) {
      onclick();
    }
  }
</script>

<button
  type="button"
  onclick={handleClick}
  {disabled}
  class="google-button text-xxs flex max-h-9 items-center px-3 py-1 font-medium md:px-4 md:py-2 md:text-sm"
>
  {#if iconName}
    <iconify-icon icon={iconName} class="mr-1 text-[18px] md:mr-3"></iconify-icon>
  {:else}
    <Emoji class_="mr-2 md:mr-3" emoji="👍" />
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
    &:disabled {
      @apply cursor-not-allowed bg-white opacity-50 hover:bg-white;
    }
  }
</style>
