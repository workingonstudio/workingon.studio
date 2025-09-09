<script lang="ts">
</script>

<a href="#top" class="thumb-swing">
  <h2 class="flex items-center text-xl font-bold tracking-tight">
    <span class="mr-2">👍</span>
    <span class="leading-none">Dad Reply</span>
  </h2>
</a>

<style>
  h2 {
    font-family: var(--font-geist);
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

  .thumb-swing:hover span:first-child {
    animation: thumbSwing 1s ease-in;
  }
</style>
