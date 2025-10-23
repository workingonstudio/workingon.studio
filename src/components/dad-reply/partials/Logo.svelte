<!-- Logo.svelte -->
<script lang="ts">
  import Emoji from "./Emoji.svelte";
  import { selectedTone } from "@stores/dadreply/toneStore";

  function switchEmojiTone() {
    const tones = ["tone-1", "tone-2", "tone-3", "tone-4", "tone-5", "tone-6"];
    const currentIndex = tones.indexOf($selectedTone);
    const nextIndex = (currentIndex + 1) % tones.length;
    $selectedTone = tones[nextIndex];
  }
</script>

<div class="group flex items-center gap-3 font-bold tracking-tight">
  <a href="#top" class="thumb-swing">
    <Emoji class_="mr-2 emoji" emoji="👍" />
    <span class="leading-none">Dad Reply</span>
  </a>
  <button type="button" aria-label="Toggle tone menu" onclick={switchEmojiTone}>
    <iconify-icon icon="material-symbols:stroke-full" class="cursor-pointer text-sm"></iconify-icon>
  </button>
</div>

<style>
  @reference "@styles/dad-reply.css";
  div {
    font-family: var(--font-geist);
    @apply text-base md:text-xl;
  }

  button {
    @apply invisible flex items-center transition-all duration-150;
    @apply rounded-md border border-gray-300;
    @apply px-0.5 py-0.5;
    @apply group-hover:visible;
  }

  a.thumb-swing :global(.emoji) {
    display: inline-block;
    transform-origin: bottom left;
  }

  a.thumb-swing:hover :global(.emoji) {
    animation: thumbSwing 1s ease-in-out;
  }

  @keyframes thumbSwing {
    0% {
      transform: rotate(0deg);
    }
    15% {
      transform: rotate(-12deg);
    }
    30% {
      transform: rotate(8deg);
    }
    45% {
      transform: rotate(-4deg);
    }
    60% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
