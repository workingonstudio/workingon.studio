<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
</script>

<div id="pro" class="flex flex-col gap-24 py-30">
  <div class="flex flex-col space-y-4 text-center">
    <span class="cursor-default text-4xl">🤔</span>
    <h2>Why not go Pro?</h2>
    <p class="text-pretty">Get an advanced button, remove the branding link and add 3 custom emojis.</p>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col">
      <div class="flex flex-col gap-3 rounded-xl border border-gray-300 px-4 py-4">
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">👋</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Wave</div>
        </div>
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="text-2xl"></iconify-icon>
          <button class="the-shadow rounded-lg border border-slate-300 px-3 py-2">👀</button>
          <div class="the-shadow flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Looking</div>
        </div>
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🥳</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Yay!</div>
        </div>
      </div>
    </div>
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Pro trial" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>When a thumbs not enough.</h4>
        <p>Need to say more? With Pro you can add three custom emojis</p>
        <p>Ideal for being more ambiguous, or interacting with a CRM, Support tickets, a HR suite or code base.*</p>
        <small>* Using Github actions.</small>
      </div>
    </div>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Pro trial" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>Pappas got a brand new bag.</h4>
        <p>Need to say more? With Pro you can add three custom emojis</p>
        <p>Ideal for being more ambiguous, or interacting with a CRM, Support tickets, a HR suite or code base.*</p>
        <small>* Using Github actions.</small>
      </div>
    </div>
    <div class="flex w-2/5 flex-col gap-6 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8">
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
        <small>Division Vice President</small>
      </div>
      <div class="flex w-100 flex-row gap-4">
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
