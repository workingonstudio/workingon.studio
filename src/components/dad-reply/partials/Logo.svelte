<script lang="ts">
  import Emoji from "./Emoji.svelte";
</script>

<a href="#top" class="thumb-swing">
  <h2 class="flex items-center font-bold tracking-tight">
    <Emoji class_="mr-2 emoji" emoji="👍" />
    <span class="leading-none">Dad Reply</span>
  </h2>
</a>

<style>
  @reference "@styles/dad-reply.css";
  h2 {
    font-family: var(--font-geist);
    @apply text-base md:text-xl;
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

  .thumb-swing:hover :global(.emoji) {
    animation: thumbSwing 1s ease-in;
  }
</style>
