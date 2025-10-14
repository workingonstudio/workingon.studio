<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
</script>

<div id="pro" class="flex flex-col gap-24 py-30">
  <div class="flex flex-col space-y-4 text-center">
    <span class="cursor-default text-4xl">🔑</span>
    <h2>Unlock more with Pro.</h2>
    <p class="text-pretty">Get an advanced button, remove the branding link and add 3 custom Emoji.</p>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col">
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
    <div class="flex w-2/5 flex-col items-start gap-6">
      <div class="flex flex-row gap-2">
        <Badge text="More options" bgColor="bg-blue-100" />
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Add custom Emoji.</h4>
        <p>Ideal for being more ambiguous, or email triage for your Codebase.*</p>
        <small>* Pair with Github Actions for full automation.</small>
      </div>
    </div>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col items-start gap-6">
      <div class="flex flex-row gap-2">
        <Badge text="More control" bgColor="bg-blue-100" />
        <Badge text="Pro" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Advanced button.</h4>
        <p></p>
        <small>* e.g. Github, Salesforce, Pipedrive, Zendesk, Intercom</small>
      </div>
    </div>
    <div class="flex w-2/5 flex-col gap-6 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8">
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
        <small>Division Vice President</small>
      </div>
      <div class="flex w-110 flex-row justify-start gap-4">
        <AdvButton />
        <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="material-symbols:reply-rounded" />
        <MailButton text="Forward" iconName="material-symbols:forward" />
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
