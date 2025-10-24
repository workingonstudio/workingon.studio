<!-- src/components/dad-reply/partials/NewButton.svelte -->
<script lang="ts">
  import Emoji from "./Emoji.svelte";

  let showMenu: boolean = true;
  $: buttonIcon = showMenu ? "material-symbols:close-small-rounded" : "material-symbols:keyboard-arrow-down-rounded";

  let containerRef: any;

  let selectedIndex = 1;

  $: currentButton = buttonOptions[selectedIndex];

  $: buttonOptions = [
    {
      emoji: "👍",
      text: "Dad Reply",
      class: "",
    },
    {
      emoji: "🔥",
      text: "Hot lead",
      class: "active",
    },
    {
      emoji: "📞",
      text: "Need to call",
      class: "",
    },
    {
      emoji: "❄️",
      text: "Cold lead",
      class: "",
    },
  ];

  function updateButton(option: any) {
    selectedIndex = buttonOptions.findIndex((btn) => btn.emoji === option.emoji);
    handleClick();
  }

  function handleClick() {
    showMenu = !showMenu;
  }
</script>

<div class="font-['Google Sans'] relative text-sm font-medium" bind:this={containerRef}>
  {#if showMenu}
    <div
      class="absolute bottom-full left-1/2 z-50 mb-4 flex min-w-[160px] -translate-x-1/2 transform flex-col rounded-lg border border-slate-300 bg-white p-2 shadow *:cursor-pointer *:rounded-sm *:p-2 *:text-left *:hover:bg-slate-50"
    >
      {#each buttonOptions as option, index}
        <button class={index === selectedIndex ? "active" : ""} on:click|preventDefault={() => updateButton(option)}>
          <Emoji class_="mr-2" emoji={option.emoji} />
          {option.text}
        </button>
      {/each}
    </div>
  {/if}

  <div class="google-button flex max-h-9 flex-row">
    <button class="rounded-full rounded-r-lg border border-slate-400 px-4 py-2">
      <Emoji class_="mr-2" emoji={currentButton.emoji} />
      {currentButton.text}
    </button>
    <button
      type="button"
      class="flex items-center justify-center rounded-r-full border border-l-0 border-slate-400 pr-2 pl-1"
      on:click={handleClick}
      aria-label="close / open button"
    >
      <iconify-icon icon={buttonIcon} class="h-6 w-6 text-2xl"></iconify-icon>
    </button>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  .google-button {
    font-family: "Google Sans", sans-serif;
    color: #444746;
    @apply bg-white;
    @apply rounded-full border-slate-400;
    button {
      &:hover {
        @apply cursor-pointer bg-slate-100;
      }
    }
  }
  .shadow {
    box-shadow:
      0 55px 15px 0 rgba(99, 99, 99, 0),
      0 35px 14px 0 rgba(99, 99, 99, 0.01),
      0 20px 12px 0 rgba(99, 99, 99, 0.05),
      0 9px 9px 0 rgba(99, 99, 99, 0.09),
      0 2px 5px 0 rgba(99, 99, 99, 0.1);
  }

  .active {
    @apply bg-blue-50 font-bold;
  }
</style>
