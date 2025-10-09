<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  export let emailName: string = "";

  let chromeStoreURL = "https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop";
</script>

<div in:slide={{ duration: 200, easing: cubicOut }}>
  <div
    class="mt-8 flex flex-col gap-3 border-t-1 border-slate-200 pt-8 font-[Roboto]"
    in:fade={{ delay: 200, duration: 200, easing: cubicOut }}
  >
    <div class="flex flex-row gap-3">
      <img src="/dad-reply/avatars/me-shoe.png" class="h-9 w-9 rounded-full" alt="" />
      <div class="flex flex-col">
        <strong class="text-xs md:text-[15px]">
          {emailName}
          <span class="text-xxs font-normal text-slate-400 md:text-xs">
            <a href="mailto:paul@workingon.studio">&lt;paul@workingon.studio&gt;</a>
          </span>
        </strong>
        <!-- prettier-ignore -->
        <span class="flex items-center gap-1 text-xxs md:text-xs font-normal text-slate-400"><span>to</span><span>&lt;bill.lumbergh@initech.com&gt;</span>
          <iconify-icon icon="material-symbols:arrow-drop-down-rounded" class="text-lg"></iconify-icon>
        </span>
      </div>
    </div>
    <div class="ml-12 flex flex-col gap-2">
      <slot />
      <a class="text-xxs color font-[Arial] font-normal md:text-xs" href={chromeStoreURL}>via dad reply</a>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";

  a {
    @apply text-slate-400 hover:text-blue-600;
  }
</style>
