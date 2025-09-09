<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
  import ToneRadio from "./partials/ToneRadio.svelte";
  import MailButton from "./partials/MailButton.svelte";
  let selectedTone = "tone-1";

  let emojiList = ["👋", "👀", "💩", "🔥", "🤘", "🍾", "💀", "💰", "☕"];
</script>

<div class="flex flex-row items-start gap-32">
  <div class="flex-1 space-y-40">
    <div class="space-y-6">
      <div class="flex flex-row place-content-between items-center">
        <h4 class="inline-flex">Choose a tone that matches you.</h4>
        <Badge text="Free" bgColor="bg-blue-100" />
      </div>
      <div class="flex flex-row justify-between py-6">
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
        <h4 class="inline-flex">A new button?</h4>
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div class="py-6">
        <div class="relative flex flex-col rounded-bl-[14px] border-b-1 border-l-1 border-slate-300 p-12">
          <div class="absolute inset-x-0 space-y-5 px-12 font-[Arial] text-sm/7 [&_p]:!text-black">
            <p>
              Not because I'm trying to fix broken systems. Because I'm meeting people where they are and changing how
              they interact with those systems.
            </p>
            <p>Cheers.</p>
          </div>
          <div class="mt-38 flex items-end space-x-3">
            <AdvButton />
            <MailButton iconName="reply" text="Reply" />
            <MailButton iconName="forward" text="Forward" />
          </div>
        </div>
      </div>
      <p>
        That right baby. This isn’t like selling electric windows in a new car. This is like selling a purpose build
        napping pod.
      </p>
    </div>
    <div class="space-y-6">
      <div class="flex flex-row place-content-between items-center">
        <h4 class="inline-flex">Custom responses?</h4>
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-row items-center justify-between py-6">
        {#each emojiList as emoji}
          <div
            class="flex h-[44px] w-[44px] cursor-default items-center justify-center rounded-lg border border-slate-300 text-[20px] transition-all delay-50 ease-in-out hover:shadow-lg hover:motion-safe:animate-bounce"
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
  <div class="sticky top-1/3 my-14 w-2/5 space-y-3.5">
    <span class="text-[40px]">👀</span>
    <h3 class="!text-[32px] font-semibold text-slate-700">What's coming in v1.5</h3>
    <p>This dad’s hit the gym listened to the latest alpha male podcast* and is ready to get back on the market*.</p>
    <small>* ignored the advice because its’s ridiculous nonsense.</small>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  h4 {
    @apply text-2xl font-semibold;
  }
  p {
    @apply leading-relaxed text-slate-500;
  }
  small {
    @apply text-xs text-slate-400;
  }
</style>
