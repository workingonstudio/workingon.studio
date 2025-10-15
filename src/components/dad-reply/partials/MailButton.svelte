<script lang="ts">
  import Emoji from "./Emoji.svelte";
  let thumbClass = $state("thumb-swing");
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
    console.log("BEFORE:", thumbClass);
    thumbClass = "";
    console.log("AFTER:", thumbClass);
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
  class="google-button text-xxs relative flex max-h-9 px-3 py-1 font-medium md:px-4 md:py-2 md:text-sm"
>
  {#if iconName}
    <iconify-icon icon={iconName} class="mr-1 hidden md:mr-3 md:flex md:text-[18px]"></iconify-icon>
  {:else}
    <span>
      <Emoji class_="mr-2 md:mr-3" emoji="👍" />
    </span>
  {/if}
  {text}
</button>

<style>
  @reference "@styles/dad-reply.css";
  .google-button {
    font-family: "Google Sans", sans-serif;
    color: #444746;
    @apply rounded-full border border-slate-400;
    &:hover {
      @apply cursor-pointer bg-slate-100;
    }
    &:disabled {
      @apply cursor-not-allowed bg-white opacity-50 hover:bg-white;
    }
  }
  .indicator {
    @apply absolute -left-1 h-2 w-2 animate-ping rounded-full bg-blue-600;
  }

  @keyframes thumbSwing {
    0% {
      transform: rotate(0deg);
      transform-origin: bottom left;
    }
    15% {
      transform: rotate(-12deg);
      transform-origin: bottom left;
    }
    30% {
      transform: rotate(8deg);
      transform-origin: bottom left;
    }
    45% {
      transform: rotate(-4deg);
      transform-origin: bottom left;
    }
    60% {
      transform: rotate(2deg);
      transform-origin: bottom left;
    }
    75% {
      transform: rotate(-1deg);
      transform-origin: bottom left;
    }
    100% {
      transform: rotate(0deg);
      transform-origin: bottom left;
    }
  }

  .thumb-swing {
    animation: thumbSwing 1s ease-in infinite;
  }
</style>
