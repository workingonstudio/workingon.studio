<script lang="ts">
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
  class="google-button flex max-h-9 items-center px-4 py-2 text-xs font-medium md:text-sm [&_span]:mr-3"
>
  {#if iconName}
    <iconify-icon icon={iconName} class="mr-3 text-[18px]"></iconify-icon>
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
    &:disabled {
      @apply cursor-not-allowed bg-white opacity-50 hover:bg-white;
    }
  }
</style>
