<script lang="ts">
</script>

<nav class="flex flex-row items-center">
  <ul class="text-body flex flex-row gap-6 rounded-full bg-stone-100 px-6 text-xs font-bold">
    <li><a href="">Why?</a></li>
    <li><a href="">News</a></li>
    <li><a href="">Community</a></li>
  </ul>
  <a class="rss px-3" href="" aria-label="Subscribe to Rss">
    <iconify-icon icon="heroicons:rss-solid" class="text-md"></iconify-icon>
  </a>
</nav>

<style>
  @reference "@styles/sketch-today.css";

  nav {
    a {
      @apply hover:text-main;
      @apply block py-3;
    }
  }
  a {
    @apply transition-all duration-200;
  }
  .rss {
    @apply text-main hover:text-orange-400;
  }
</style>
