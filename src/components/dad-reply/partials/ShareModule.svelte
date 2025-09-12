<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut, bounceIn } from "svelte/easing";

  import Icon from "@components/Icon.svelte";

  import socialButtons from "@data/dad-reply/socialButtons.json";
  import Badge from "./Badge.svelte";

  export let showShare: boolean;

  function toggleShare() {
    showShare = false;
  }

  let copiedToClipboard = false;

  let linkURL = "https://dadreply.com?UTMSource='share'";

  let copyTimeoutId: any;

  async function copyLink() {
    if (copiedToClipboard) return;
    try {
      await navigator.clipboard.writeText(linkURL);
      copiedToClipboard = true;

      if (copyTimeoutId) clearTimeout(copyTimeoutId);

      copyTimeoutId = setTimeout(() => {
        copiedToClipboard = false;
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }
</script>

<div class="mt-8" in:slide={{ duration: 200, easing: cubicOut }} out:slide={{ duration: 200, delay: 100 }}>
  <div class="mr-16 space-y-6" in:fade={{ delay: 300, duration: 200, easing: cubicOut }} out:fade={{ duration: 200 }}>
    <div class="flex h-[25px] flex-row items-center justify-between text-base font-semibold">
      <div class="flex space-x-2">
        <Icon name="forward" class_="flex text-2xl text-blue-600" />
        <span class="flex">Forward.</span>
      </div>
      <div in:fade={{ duration: 500, easing: bounceIn }} out:fade={{ duration: 500, easing: cubicOut }}>
        {#if copiedToClipboard}
          <Badge text="Copied to clipboard" bgColor="bg-blue-100" />
        {/if}
      </div>
    </div>

    <form action="" class="relative flex flex-1 flex-row justify-between">
      <label for="link" class="grow">
        <input id="link" readonly type="text" value={linkURL} class="cursor-default outline-0" />
      </label>
      <button
        type="button"
        onclick={copyLink}
        class="absolute top-[2px] right-0 cursor-pointer p-3 hover:*:text-blue-600"
      >
        <Icon name="copy" class_="text-slate-400 text-xl" />
      </button>
    </form>

    <div class="flex flex-row justify-between">
      <ul class="flex flex-row space-x-3">
        {#each socialButtons as { title, iconRef, href, color }}
          <li>
            <a
              {href}
              {title}
              aria-label={title}
              class="flex h-[41px] w-[41px] items-center rounded-lg border border-slate-300 p-2 transition delay-50 hover:shadow-lg"
            >
              <i class="fa-brands {'fa-' + iconRef} text-xl {color}"></i>
            </a>
          </li>
        {/each}
      </ul>
      <button
        onclick={toggleShare}
        class="group flex h-[41px] w-[41px] items-center justify-center rounded-lg border border-slate-300 p-2 transition delay-50 hover:cursor-pointer"
      >
        <Icon name="delete" class_="text-[#444746] text-xl group-hover:text-red-500" />
      </button>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
