<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "@stores/themeStore";

  type Theme = "light" | "dark" | "sunset";

  // Sync with DOM on mount
  onMount(() => {
    if (document.documentElement.classList.contains("dark")) {
      $theme = "dark";
    } else if (document.documentElement.classList.contains("sunset")) {
      $theme = "sunset";
    } else {
      $theme = "light";
    }
  });

  function setTheme(newTheme: Theme) {
    $theme = newTheme;
  }

  const themeConfig = [
    { mode: "light" as Theme, icon: "carbon:sun", label: "Light mode" },
    { mode: "sunset" as Theme, icon: "carbon:sunset", label: "Sunset mode" },
    { mode: "dark" as Theme, icon: "carbon:moon", label: "Dark mode" },
  ];
</script>

<div class="flex items-center gap-3">
  {#each themeConfig as { mode, icon, label }}
    <button
      onclick={() => setTheme(mode)}
      aria-label={label}
      class="hover:text-primary flex size-5 cursor-pointer items-center justify-center transition-colors {$theme ===
      mode
        ? 'text-primary'
        : 'text-primary/30'}"
    >
      <iconify-icon {icon} class="text-xl transition-colors"></iconify-icon>
    </button>
  {/each}
</div>
