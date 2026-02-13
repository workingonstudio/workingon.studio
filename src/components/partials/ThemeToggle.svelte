<script lang="ts">
  import { theme } from "@stores/themeStore";

  $: icon = $theme === "dark" ? "ph:sun" : "ph:moon-stars";

  function toggleTheme() {
    $theme = $theme === "dark" ? "light" : "dark";
  }
</script>

<button
  onclick={toggleTheme}
  aria-label="{$theme === 'dark' ? 'Light' : 'Dark'} mode"
  class="text-muted hover:text-body hidden size-4 cursor-pointer items-center justify-center lg:flex"
>
  <iconify-icon {icon} class="text-base"></iconify-icon>
</button>
