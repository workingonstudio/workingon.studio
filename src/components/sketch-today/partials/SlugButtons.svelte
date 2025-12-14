<script lang="ts">
  export let urls: Record<string, string | { label: string; url: string }>;
  let iconset = "heroicons:";

  let isCopied = false;

  async function getShareLink() {
    const currentUrl = window.location.href;
    const getPath = currentUrl.split("sketch-today/")[1]; // Gets "icons/hero-icons/"
    try {
      await navigator.clipboard.writeText("https://sketchto.day/" + getPath);
      isCopied = true;
      setTimeout(() => {
        isCopied = false;
      }, 1000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Optionally show an error state
    }
  }

  function getIcon(value: string) {
    switch (value) {
      case "download":
        return iconset + "arrow-down-tray-16-solid";
      case "workspace":
        return iconset + "arrow-up-right-16-solid";
      case "github":
        return iconset + "code-bracket-16-solid";
      case "source":
        return iconset + "link-16-solid";
    }
  }

  // Process links once
  const processedLinks = Object.entries(urls).map(([key, link]) => {
    const url = typeof link === "string" ? link : link.url;
    let label = typeof link === "string" ? key : link.label || key;

    // Make source lowercase
    if (key === "source") {
      label = label.toLowerCase();
    }

    return {
      key,
      url,
      label,
      icon: getIcon(key),
    };
  });
</script>

<div class="options grid grid-flow-row grid-cols-1 gap-3 md:auto-cols-max md:grid-flow-col md:grid-cols-none">
  {#each processedLinks as link}
    <a href={link.url} class={link.key}>
      <iconify-icon icon={link.icon} class="text-base"></iconify-icon>
      <span class={link.key === "source" ? "lowercase" : "capitalize"}>{link.label}</span>
    </a>
  {/each}
  <button type="button" on:click={getShareLink}>
    <iconify-icon
      icon="heroicons:{isCopied ? 'check-16-solid' : 'link-16-solid'}"
      class="text-base {isCopied ? 'text-emerald-500' : ''}"
    ></iconify-icon>
    <span>{isCopied ? "Copied to clipboard" : "Copy Link"}</span>
  </button>
</div>

<style>
  @reference "@styles/sketch-today.css";
  a,
  button {
    @apply items-center gap-3 rounded-lg px-3 py-3 hover:bg-stone-100;
    @apply hover:text-header text-body flex flex-row;
    @apply transition-colors duration-300;
    @apply text-xs font-semibold;
    @apply cursor-pointer;
    &:first-child {
      @apply bg-header hover:text-header text-white hover:bg-stone-100;
    }
  }
</style>
