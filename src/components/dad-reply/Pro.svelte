<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
  import SectionHeader from "./partials/SectionHeader.svelte";
  import MailButton from "./partials/MailButton.svelte";
</script>

<div id="pro" class="flex flex-col gap-24 py-30">
  <SectionHeader
    emoji="🔓"
    header="Pro Trial unlocked."
    body="Get an advanced button and 3 custom Emoji replies.*"
    hasFootnote
    footnote="trial ends once I have implimented payments."
  />
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col md:w-3/5 lg:w-2/5">
      <div class="flex flex-col gap-3 px-4 py-4">
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="h-6 w-6 text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🎖️</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Feature</div>
        </div>
        <div
          class="the-shadow flex scale-110 flex-row items-center gap-3 rounded-lg border border-slate-300 bg-white p-2"
        >
          <iconify-icon icon="material-symbols:drag-indicator" class="h-7 w-auto text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🐛</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Bug</div>
        </div>
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="h-6 w-6 text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🛟</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Issue</div>
        </div>
      </div>
    </div>
    <div class="order-first flex w-90 flex-col items-start gap-6 md:w-2/3 lg:order-0 lg:w-2/5">
      <div class="flex flex-row gap-2">
        <Badge text="More options" bgColor="bg-blue-100" />
        <Badge text="Pro trial" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Add custom Emoji.</h4>
        <p>Ideal for being more ambiguous, or email triage for your Codebase.*</p>
        <small>* Pair with Github Actions for full automation.</small>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col items-start gap-6 md:w-2/3 lg:w-2/5">
      <div class="flex flex-row gap-2">
        <Badge text="More control" bgColor="bg-blue-100" />
        <Badge text="Pro trial" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Advanced button.</h4>
        <p>What good are 3 Emoji if you can't use them? With access to the advanced button that's how.*</p>
        <small>* Yes you can set to instantly send on select.</small>
      </div>
    </div>
    <div
      class="mt-20 flex w-90 flex-col gap-6 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8 md:w-2/3 lg:w-2/5"
    >
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
        <small>Division Vice President</small>
      </div>
      <div class="flex flex-row items-stretch justify-start gap-4">
        <AdvButton />
        <div class="flex flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:h-9"></div>
        <div
          class="hidden flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:flex md:h-9"
        ></div>
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
