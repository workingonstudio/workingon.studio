<!-- src/components/Icon.svelte - Simple Version with No Layout Shift -->
<script>
  import IconifyIcon from "@iconify/svelte";
  import { onMount } from "svelte";

  // Icon props
  export let icon = "";
  export let name = "";
  export let class_ = "";
  export let style = "";
  export let width = undefined;
  export let height = undefined;
  export let inline = false;

  let mounted = false;

  // Icon mapping
  const iconMap = {
    addCircleOutline: "material-symbols:add-circle-outline-rounded",
    webTraffic: "material-symbols:web-traffic-rounded",
    flashOff: "material-symbols:flash-off-outline-rounded",
    reply: "material-symbols:reply-rounded",
    forward: "material-symbols:forward-rounded",
    arrowDown: "material-symbols:keyboard-arrow-down-rounded",
    close: "material-symbols:close-small-rounded",
    dropDown: "material-symbols:arrow-drop-down",
    quote: "material-symbols:format-quote-outline-rounded",
    progress: "material-symbols:progress-activity",
    // Main
    copywrite: "material-symbols:copyright-outline-rounded",
    noodleBowl: "carbon:noodle-bowl",
    rainDrop: "carbon:rain-drop",
    boolean: "carbon:boolean",
    mailReply: "carbon:mail-reply",
    application: "carbon:application",
    notebook: "carbon:notebook",
    edit: "carbon:edit",
    shoppingCart: "carbon:shopping-cart",
  };

  // Determine which icon to use
  $: iconToUse = name && iconMap[name] ? iconMap[name] : icon;

  // Extract size info from classes for consistent dimensions
  $: sizeClass = class_.includes("text-2xl")
    ? "w-6 h-6"
    : class_.includes("text-xl")
      ? "w-5 h-5"
      : class_.includes("text-lg")
        ? "w-[18px] h-[18px]"
        : class_.includes("icon-xl")
          ? "w-8 h-8"
          : class_.includes("icon-lg")
            ? "w-6 h-6"
            : class_.includes("icon-md")
              ? "w-5 h-5"
              : class_.includes("icon-sm")
                ? "w-4 h-4"
                : class_.includes("icon-xs")
                  ? "w-3 h-3"
                  : "w-4 h-4";

  onMount(() => {
    mounted = true;

    // Preload icons
    (async () => {
      try {
        const iconsToPreload = Object.values(iconMap);
        const { preloadIcons } = await import("@iconify/svelte");
        if (preloadIcons) {
          await preloadIcons(iconsToPreload);
        }
      } catch (error) {
        console.warn("Icon preloading failed:", error);
      }
    })();
  });
</script>

<!-- Always maintain consistent dimensions -->
<span class="items-center justify-center {sizeClass} {class_}" {style}>
  {#if mounted}
    <IconifyIcon icon={iconToUse} {width} {height} {inline} />
  {/if}
</span>

<style>
  /* Icon utility classes */
  :global(.icon-xs) {
    width: 12px;
    height: 12px;
  }
  :global(.icon-sm) {
    width: 16px;
    height: 16px;
  }
  :global(.icon-md) {
    width: 20px;
    height: 20px;
  }
  :global(.icon-lg) {
    width: 24px;
    height: 24px;
  }
  :global(.icon-xl) {
    width: 32px;
    height: 32px;
  }
</style>
