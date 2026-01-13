<script lang="ts">
  import { theme } from "@stores/themeStore";

  function toggleTheme() {
    $theme = $theme === "dark" ? "light" : "dark";
  }
</script>

<button
  onclick={toggleTheme}
  aria-label="{$theme === 'dark' ? 'Light' : 'Dark'} mode"
  class="text-muted hover:text-body flex size-6 cursor-pointer items-center justify-center"
>
  <iconify-icon icon="carbon:brightness-contrast" class="text-2xl"></iconify-icon>
</button>
