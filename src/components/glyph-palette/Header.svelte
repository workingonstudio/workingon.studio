<script lang="ts"></script>

<header class="flex flex-row items-center gap-6">
  <a href="/">glyph.palette</a>
  <div class="flex flex-row gap-3">
    <span class="badge bg-primary!">Alpha</span>
    <span class="badge">v0.5</span>
  </div>
</header>

<style>
  @reference "@styles/glyph-palette.css";
  header {
    @apply mb-11 py-14;
    a {
      @apply font-cabinet-grotesk text-base font-bold uppercase;
    }
    .badge {
      @apply rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase;
    }
  }
</style>
