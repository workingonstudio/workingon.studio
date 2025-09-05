<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import ToneRadio from "./partials/ToneRadio.svelte";
  let selectedTone = "tone-1";
</script>

<div class="flex flex-row items-start gap-32 [&_p]:leading-relaxed">
  <div class="sticky top-1/3 my-14 w-2/5 space-y-3.5">
    <h2 class="text-[32px] font-semibold">What to expect in v1.5.0</h2>
    <p>This dad’s hit the gym listened to the latest alpha male podcast* and is ready to get back on the market*.</p>
    <small>* ignored the advice because its’s ridiculous nonsense.</small>
  </div>
  <div class="flex-1 space-y-40">
    <div class="space-y-6">
      <h3>Choose a tone that matches you. <Badge text="Free" bgColor="bg-blue-100" /></h3>
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
      <h3>Another button?<Badge text="Pro" bgColor="bg-orange-100" /></h3>
      <div class="rounded-lg border border-slate-300 p-6"></div>
      <p>
        That right baby. This isn’t like selling electric windows in a new car. This is like selling a purpose build
        napping pod.
      </p>
    </div>
    <div class="space-y-6">
      <h3>Custom responses!</h3>
      <div class="rounded-lg border border-slate-300 p-6"></div>
      <p>
        That right baby. This isn’t like selling electric windows in a new car. This is like selling a purpose build
        napping pod. Check out this new addition.
      </p>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  h3 {
    @apply text-2xl font-semibold;
  }
  p {
    @apply leading-relaxed text-slate-500;
  }
  small {
    @apply text-xs text-slate-400;
  }
</style>
