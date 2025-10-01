<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
  import ToneRadio from "./partials/ToneRadio.svelte";
  import MailButton from "./partials/MailButton.svelte";
  let selectedTone = "tone-1";

  let emojiList = ["👋", "👀", "💩", "🔥", "🤘", "🍾", "💀", "💰", "☕", "👏"];
</script>

<div class="flex flex-col items-start md:flex-row md:gap-32">
  <div class="flex-1 space-y-40">
    <div class="space-y-6">
      <div class="flex flex-row place-content-between items-center">
        <h3 class="inline-flex">Choose your tone.</h3>
        <Badge text="Free" bgColor="bg-blue-100" />
      </div>
      <div
        class="grid auto-cols-min grid-flow-col grid-rows-2 justify-center gap-6 py-6 md:grid-rows-1 md:justify-between"
      >
        <ToneRadio value="tone-1" bind:group={selectedTone} />
        <ToneRadio value="tone-2" emoji="👍🏻" bind:group={selectedTone} />
        <ToneRadio value="tone-3" emoji="👍🏼" bind:group={selectedTone} />
        <ToneRadio value="tone-4" emoji="👍🏽" bind:group={selectedTone} />
        <ToneRadio value="tone-5" emoji="👍🏾" bind:group={selectedTone} />
        <ToneRadio value="tone-6" emoji="👍🏿" bind:group={selectedTone} />
      </div>
      <p>
        In v1.5.0 you’ll have the ability to change the tone of thumb up. You have the choice everywhere else, so why
        not here too.*
      </p>
      <small class="text-xs text-slate-400">
        * I understand that this is like selling a car on it having electric windows.
      </small>
    </div>
    <div class="space-y-6">
      <div class="flex flex-row place-content-between items-center">
        <h3 class="inline-flex">A new button?</h3>
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div class="py-6">
        <div class="card relative hidden flex-col rounded-none rounded-bl-2xl border-t-0 border-r-0 p-12 md:flex">
          <div class="absolute inset-x-0 space-y-5 px-12 font-[Arial] text-sm/7 [&_p]:!text-black">
            <p>
              Not because I'm trying to fix broken systems. Because I'm meeting people where they are and changing how
              they interact with those systems.
            </p>
            <p>Cheers.</p>
          </div>
          <div class="mt-38 flex items-end space-x-3">
            <AdvButton />
            <MailButton iconName="material-symbols:reply-rounded" text="Reply" />
            <MailButton iconName="material-symbols:forward-rounded" text="Forward" />
          </div>
        </div>
        <div class="flex h-40 flex-col items-center justify-end md:hidden">
          <AdvButton />
        </div>
      </div>
      <p>
        That right baby. This isn’t like selling electric windows in a new car. This is like selling a purpose build
        napping pod.
      </p>
    </div>
    <div class="space-y-6">
      <div class="flex flex-row place-content-between items-center">
        <h3 class="inline-flex">Custom responses?</h3>
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div
        class="grid auto-cols-min grid-flow-col grid-rows-2 justify-center gap-4 py-6 md:grid-rows-1 md:justify-between"
      >
        {#each emojiList as emoji}
          <div
            class="relative bottom-0 flex h-[44px] w-[44px] cursor-default items-center justify-center rounded-lg border border-slate-300 text-[20px] transition-all delay-75 ease-in-out hover:bottom-2 hover:shadow-lg"
          >
            {emoji}
          </div>
        {/each}
      </div>
      <p>
        That right baby. This isn’t like selling electric windows in a new car. This is like selling a purpose build
        napping pod. Check out this new addition.
      </p>
    </div>
  </div>
  <div class="order-first mb-40 space-y-4 md:sticky md:top-1/3 md:order-last md:mb-0 md:w-2/5">
    <span class="block text-4xl">👀</span>
    <h2>What's coming in v1.5</h2>
    <p>This dad’s hit the gym listened to the latest alpha male podcast* and is ready to get back on the market*.</p>
    <small>* ignored the advice because its’s ridiculous nonsense.</small>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
