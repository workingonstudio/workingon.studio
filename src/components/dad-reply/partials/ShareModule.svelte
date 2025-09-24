<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  import socialButtons from "@data/dad-reply/socialButtons.json";
  import Badge from "./Badge.svelte";

  export let showShare: boolean;

  function toggleShare() {
    showShare = false;
  }

  let copiedToClipboard = false;

  let linkURL = "https://wo.studio/projects/dad-reply";
  let linkText = "Dad Reply: Instantly reply to your emails with minimal effort and maximum dad energy.";
  linkText = encodeURIComponent(linkText);

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

<div class="mt-8" in:slide={{ duration: 200, easing: cubicOut }} out:slide={{ duration: 200, delay: 200 }}>
  <div
    class="mr-0 space-y-6 md:mr-16"
    in:fade={{ delay: 300, duration: 200, easing: cubicOut }}
    out:fade={{ duration: 200 }}
  >
    <div class="flex h-[25px] flex-row items-center justify-between text-base font-semibold">
      <div class="flex space-x-2">
        <iconify-icon icon="material-symbols:forward-rounded" class="text-2xl text-blue-600"></iconify-icon>
        <span class="flex">Forward.</span>
      </div>
      {#if copiedToClipboard}
        <div in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
          <Badge text="Copied to clipboard" bgColor="bg-blue-100" />
        </div>
      {/if}
    </div>

    <form action="" class="relative flex flex-1 flex-row justify-between">
      <label for="link" class="grow">
        <input id="link" readonly type="text" value={linkURL} class="cursor-default outline-0" />
      </label>
      <button
        type="button"
        onclick={copyLink}
        aria-label="copy link"
        class="absolute top-[2px] right-0 cursor-pointer p-3 hover:*:text-blue-600"
      >
        <iconify-icon
          icon="material-symbols:content-copy-outline-rounded"
          class="text-xl text-slate-400"
        ></iconify-icon>
      </button>
    </form>

    <div class="flex flex-row justify-between">
      <ul class="flex flex-row space-x-3">
        {#each socialButtons as { title, iconRef, href, color }}
          <li>
            {#if iconRef === "bluesky"}
              <a
                href={href + linkText + "%20" + encodeURIComponent(linkURL)}
                {title}
                aria-label={title}
                target="_blank"
              >
                <i class="fa-brands {'fa-' + iconRef} text-md {color}"></i>
              </a>
            {:else}
              <a href={href + linkText + "&url=" + linkURL} {title} aria-label={title} target="_blank">
                <i class="fa-brands {'fa-' + iconRef} text-xl {color}"></i>
              </a>
            {/if}
          </li>
        {/each}
      </ul>
      <button
        onclick={toggleShare}
        class="group flex h-[41px] w-[41px] items-center justify-center rounded-lg border border-slate-300 p-2 transition delay-50 hover:cursor-pointer"
        aria-label="close share"
      >
        <iconify-icon
          icon="material-symbols:delete-outline-rounded"
          class="text-xl text-[#444746] group-hover:text-red-500"
        ></iconify-icon>
      </button>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  ul {
    li {
      a {
        @apply flex h-[41px] w-[41px] items-center justify-center rounded-lg border border-slate-300 p-2 transition delay-50 hover:shadow-lg;
      }
    }
  }
</style>
