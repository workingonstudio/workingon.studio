<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
</script>

<div id="pro" class="flex flex-col gap-24 py-30">
  <div class="flex flex-col space-y-4 text-center">
    <span class="cursor-default text-4xl">🤔</span>
    <h2>Why not go Pro?</h2>
    <p class="text-pretty">
      The perfect companion for <s>the email power user</s>
      email.
    </p>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Pro trial" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>Added directly in Gmail.</h4>
        <p>Sitting along side the reply button like it’s always been there.*</p>
        <small>* Unlike my dad.</small>
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
