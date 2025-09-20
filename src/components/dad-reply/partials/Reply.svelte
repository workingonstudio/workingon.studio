<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  export let emailName: string = "";
  export let emailContent: string;

  let chromeStoreURL = "https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop";
</script>

<div in:slide={{ duration: 200, easing: cubicOut }}>
  <div class="font-[Roboto]" in:fade={{ delay: 200, duration: 200, easing: cubicOut }}>
    <strong class="text-[15px]">
      {emailName}
      <span class="text-xs font-normal text-slate-400">
        <a href={chromeStoreURL}>&lt;download@chrome.store&gt;</a>
      </span>
    </strong>
    <!-- prettier-ignore -->
    <span class="flex items-center text-xs font-normal text-slate-400"><span>to</span><a href="https://workingon.studio">workingon.studio</a>
      <iconify-icon icon="material-symbols:arrow-drop-down-rounded" class="text-lg"></iconify-icon>
    </span>
    <p class="py-2">{emailContent}</p>
    <a class="font-[Arial] text-xs font-normal" href={chromeStoreURL}>via dad reply</a>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";

  a {
    @apply text-slate-400 hover:text-blue-600;
  }
</style>
