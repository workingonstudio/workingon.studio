<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
  import ToneRadio from "./partials/ToneRadio.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import Emoji from "./partials/Emoji.svelte";
  import { selectedTone, applyTone } from "@stores/dadreply/toneStore";
  import { changeFavicon, resetFavicon } from "@utils/dad-reply/faviconChanger";
  import { onMount, onDestroy } from "svelte";

  let emojiList = ["👋", "👀", "💩", "🔥", "🤘", "🍾", "💀", "💰", "👏"];

  // Watch for tone changes and update favicon
  $: if ($selectedTone) {
    const tonedEmoji = applyTone("👍", $selectedTone);
    changeFavicon(tonedEmoji);
  }

  // Reset favicon when leaving the page
  onDestroy(() => {
    resetFavicon();
  });
</script>

<div class="flex flex-col items-start md:flex-row md:gap-16 lg:gap-32">
  <div class="flex-1 space-y-40 md:w-1/2">
    <div class="space-y-6">
      <div class="flex flex-col place-content-between items-start gap-3 sm:flex-row sm:items-center">
        <h3 class="inline-flex">Choose the tone, that matches your tone.</h3>
        <Badge text="Free" bgColor="bg-blue-100" otherClasses="order-first sm:order-none" />
      </div>
      <div
        class="grid auto-cols-min grid-flow-col grid-rows-2 justify-center gap-6 py-6 lg:grid-rows-1 lg:justify-between"
      >
        <ToneRadio value="tone-1" />
        <ToneRadio value="tone-2" emoji="👍🏻" />
        <ToneRadio value="tone-3" emoji="👍🏼" />
        <ToneRadio value="tone-4" emoji="👍🏽" />
        <ToneRadio value="tone-5" emoji="👍🏾" />
        <ToneRadio value="tone-6" emoji="👍🏿" />
      </div>
      <p>
        Nothing feels more personal than a low-effort response that matches you. Plus, I mean come on, this option is
        available everywhere it's not special. But you are.*
      </p>
      <small class="text-xs text-slate-400">
        * Yes, this is like selling a car because it has electric windows. I know.
      </small>
    </div>
    <div class="space-y-6">
      <div class="flex flex-col place-content-between items-start gap-3 sm:flex-row sm:items-center">
        <h3 class="inline-flex">Papa’s got a brand new bag.</h3>
        <Badge text="Pro" bgColor="bg-orange-100" otherClasses="order-first sm:order-none" />
      </div>
      <div class="py-6">
        <div class="card relative hidden flex-col rounded-none rounded-bl-2xl border-t-0 border-r-0 p-12 lg:flex">
          <div class="absolute inset-x-0 space-y-5 px-12 font-[Arial] text-sm/7 [&_p]:!text-black">
            <p>
              I'm not trying to fix broken systems. I meet people where they are and changing how they interact with
              those systems.
            </p>
            <p>Cheers.</p>
          </div>
          <div class="mt-38 flex items-end space-x-3">
            <AdvButton />
            <MailButton iconName="material-symbols:reply-rounded" text="Reply" />
            <MailButton iconName="material-symbols:forward-rounded" text="Forward" />
          </div>
        </div>
        <div class="flex h-55 flex-col items-center justify-end lg:hidden">
          <AdvButton />
        </div>
      </div>
      <p class="text-pretty">
        Choose from multiple replies to suit your mood, level of engagement, emotional capacity or how many fucks you've
        got left in the tank today.
      </p>
    </div>
    <div class="space-y-6">
      <div class="flex flex-col place-content-between items-start gap-3 sm:flex-row sm:items-center">
        <h3 class="inline-flex">Quickly approve, deny, or escalate.</h3>
        <Badge text="Pro" bgColor="bg-orange-100" otherClasses="order-first sm:order-none" />
      </div>
      <div
        class="grid auto-cols-min grid-flow-col grid-rows-2 justify-center gap-4 py-6 md:justify-between lg:grid-rows-1"
      >
        {#each emojiList as emoji}
          <div
            class="relative bottom-0 flex h-[44px] w-[44px] cursor-default items-center justify-center rounded-lg border border-slate-300 text-[20px] transition-all delay-75 ease-in-out hover:bottom-2 hover:shadow-lg"
          >
            <Emoji {emoji} />
          </div>
        {/each}
        <div
          class="relative bottom-0 flex h-[44px] w-[44px] cursor-default items-center justify-center rounded-lg border border-slate-300 text-[20px] transition-all delay-75 ease-in-out hover:bottom-2 hover:shadow-lg md:hidden"
        >
          🐰
        </div>
      </div>
      <p>
        Add custom emojis to interact with your CRM, codebase, customer support system, trading platform, HR software*
        &#8230 you get the idea.
      </p>
      <small>* You thought there wasn't a more inhuman way to fire someone? well&#8230tada.</small>
    </div>
  </div>
  <div class="order-first mb-40 space-y-4 text-pretty md:sticky md:top-1/3 md:order-last md:w-2/5 lg:mb-0 lg:w-1/2">
    <span class="block text-4xl">👀</span>
    <h2>What's NEW in v1.5</h2>
    <p>This dad’s hit the gym, bought some new fits and is off fishing to get his Tinder profile pic.</p>
    <small class="hidden md:flex">* this is over here because those eyes need to look at something.</small>
    <small class="md:hidden">* I know those eyes are looking over there, but it's below.</small>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
