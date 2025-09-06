<!-- src/components/dad-reply/partials/NewButton.svelte -->
<script lang="ts">
  import Icon from "@components/Icon.svelte";
  import { onMount } from "svelte";
  let showMenu: boolean = false;
  $: visable = showMenu ? "visible" : "invisible";
  $: buttonIcon = showMenu ? "close" : "arrowDown";

  let containerRef: any;

  let selectedIndex = 0;

  $: currentButton = buttonOptions[selectedIndex];

  $: buttonOptions = [
    {
      emoji: "👍",
      text: "Dad Reply",
      class: "active",
    },
    {
      emoji: "👀",
      text: "Looking",
      class: "",
    },
    {
      emoji: "🥳",
      text: "Yay!",
      class: "",
    },
  ];

  onMount(() => {
    function handleClickOutside(event: any) {
      if (containerRef && !containerRef.contains(event.target)) {
        showMenu = false;
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function updateButton(option: any) {
    selectedIndex = buttonOptions.findIndex((btn) => btn.emoji === option.emoji);
    handleClick();
  }

  function handleClick() {
    showMenu = !showMenu;
  }
</script>

<div class="font-['Google Sans'] flex w-fit flex-col text-sm font-medium" bind:this={containerRef}>
  <div
    class="mb-4 {visable} z-50 flex min-w-[160px] flex-col rounded-lg border border-slate-300 bg-white p-2 shadow *:cursor-pointer *:rounded-sm *:p-2 *:text-left *:hover:bg-slate-50"
  >
    {#each buttonOptions as option, index}
      <button class={index === selectedIndex ? "active" : ""} on:click|preventDefault={() => updateButton(option)}>
        <span class="mr-2">{option.emoji}</span>
        {option.text}
      </button>
    {/each}
  </div>

  <div class="google-button flex max-h-9 flex-row">
    <div class="rounded-full rounded-r-lg border px-4 py-2">
      <span class="mr-2">{currentButton.emoji}</span>
      {currentButton.text}
    </div>
    <button
      type="button"
      class="flex items-center justify-center rounded-r-full border border-l-0 pr-2 pl-1"
      on:click={handleClick}
    >
      <Icon name={buttonIcon} class_="text-2xl" />
    </button>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  .google-button {
    font-family: "Google Sans", sans-serif;
    color: #444746;
    @apply bg-white;
    @apply rounded-full border-[#747775];
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
