<script lang="ts">
  import { theme } from "@stores/themeStore";

  let icon = "carbon:sun";

  function toggleTheme() {
    $theme = $theme === "dark" ? "light" : "dark";
    icon = $theme === "dark" ? "carbon:sun" : "carbon:moon";
  }
</script>

<button
  onclick={toggleTheme}
  aria-label="{$theme === 'dark' ? 'Light' : 'Dark'} mode"
  class="text-muted hover:text-body flex size-6 cursor-pointer items-center justify-center"
>
  <iconify-icon {icon} class="text-xl"></iconify-icon>
</button>
