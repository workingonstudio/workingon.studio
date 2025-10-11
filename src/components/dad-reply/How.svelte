<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
</script>

<div class="flex flex-row gap-12">
  <div class="sticky top-1/3 flex w-3/5 flex-col gap-4">
    <span class="cursor-default text-4xl">🧬</span>
    <h2>So how does it work then?</h2>
    <p class="text-pretty">It's as ridiculous as it sounds.</p>
    <small>* Technically, if I die before that happens, free stuff for you!</small>
  </div>
  <div class="flex flex-col gap-24">
    <div class="flex flex-col items-start gap-6">
      <Badge text="Nothing to learn" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h3>Added directly in Gmail.</h3>
        <p>Sitting along side the reply button like it’s always been there.</p>
      </div>
      <div class="flex items-end gap-3">
        <div class="flex flex-col">
          <span class="the-shadow relative mb-6 rounded-full bg-white">
            <MailButton text="Got it" />
            <div class="absolute top-6 -z-4 h-full w-full rounded-full border border-dashed border-slate-300"></div>
          </span>
        </div>
        <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="material-symbols:reply-rounded" />
        <MailButton text="Forward" iconName="material-symbols:forward" />
      </div>
    </div>
    <div class="flex flex-col items-start gap-6">
      <Badge text="Automatic send" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h3>No need to even compose.</h3>
        <p>Just a single click, and Dad Reply does the rest. No compose window. No clicking send.</p>
      </div>
    </div>
    <div class="flex flex-col items-start gap-6">
      <Badge text="Approvals in seconds" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h3>Less time replying.</h3>
        <p>No more pleasantries when a simple response will do. Give people the answers they need faster.</p>
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
