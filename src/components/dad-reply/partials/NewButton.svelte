<script lang="ts">
  import Icon from "@iconify/svelte";
  let isOpen = false;
  $: buttonIcon = isOpen ? "close-small-rounded" : "keyboard-arrow-down-rounded";

  function handleClick() {
    isOpen = !isOpen;
  }
</script>

<div class="font-['Google Sans'] flex w-fit flex-col text-sm font-medium">
  <ul
    class="mb-4 flex flex-col rounded-lg border border-slate-300 p-2 shadow *:cursor-pointer *:rounded-sm *:p-2 *:hover:bg-blue-50"
  >
    <li>
      <span class="mr-1">👍</span>
      Dad Reply
    </li>
    <li>
      <span class="mr-1">✅</span>
      Got it
    </li>
    <li>
      <span class="mr-1">🤝</span>
      Thanks
    </li>
  </ul>
  <div class="google-button flex flex-row">
    <div class="rounded-full rounded-r-lg border px-4 py-2">
      <span class="mr-3">👍</span>
      Dad Reply
    </div>
    <button
      type="button"
      class="flex items-center justify-center rounded-r-full border border-l-0 pr-2 pl-1"
      on:click={handleClick}
    >
      <Icon icon="material-symbols:{buttonIcon}" class="text-2xl"></Icon>
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
</style>
