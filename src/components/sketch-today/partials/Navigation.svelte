<script lang="ts">
</script>

<nav class="flex flex-row items-center">
  <ul class="text-body flex flex-row gap-6 rounded-full bg-stone-100 px-6 text-xs">
    <li><a href="/">About</a></li>
    <li><a href="/">FAQ</a></li>
  </ul>
</nav>

<style>
  @reference "@styles/sketch-today.css";
  nav {
    a {
      @apply hover:text-main font-bold;
      @apply block py-3;
    }
  }
  .rss {
    @apply text-main hover:text-amber-500;
  }
</style>
