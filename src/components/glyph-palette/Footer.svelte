<script lang="ts">
  import { DateTime } from "luxon";
  let date = DateTime.now().year;
</script>

<footer class="flex flex-row items-center justify-between">
  <div class="flex flex-row items-center gap-6">
    <a href="#top" class="logo">glyph.palette</a>
    <small>Copywrite {date}</small>
  </div>
  <a href="https://workingon.studio" class="text-text-body hover:text-text text-xs hover:underline">workingon.studio</a>
</footer>

<style>
  @reference "@styles/glyph-palette.css";
  footer {
    @apply py-12;
    .logo {
      @apply font-cabinet-grotesk text-sm font-bold uppercase;
    }
    small {
      @apply text-xs uppercase;
    }
  }
</style>
