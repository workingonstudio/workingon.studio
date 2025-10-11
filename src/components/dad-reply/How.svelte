<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
</script>

<div class="flex flex-col items-center gap-12">
  <div class="flex flex-col gap-4 text-center">
    <span class="cursor-default text-4xl">🛠️</span>
    <h2>So how does it work then?</h2>
    <p class="text-pretty">It's as ridiculous as it sounds.</p>
    <small>* Technically, if I die before that happens, free stuff for you!</small>
  </div>
  <div class="flex flex-col gap-24 py-12">
    <div class="flex flex-row items-start text-pretty">
      <div class="flex w-1/2 flex-col items-start gap-6">
        <Badge text="Nothing to learn" bgColor="bg-orange-100" />
        <div class="flex flex-col gap-3">
          <h3>Added directly in Gmail.</h3>
          <p>Sitting along side the reply button like it’s always been there.</p>
        </div>
      </div>
      <div class="the-shadow -gap-6 -z-20 flex flex-col rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8">
        <div class="flex flex-col gap-1">
          <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
          <small>Division Vice President</small>
        </div>
        <div class="flex flex-row items-end gap-4">
          <span class="the-shadow relative mb-6 rounded-full bg-white">
            <span class="z-10">
              <MailButton text="Got it" />
            </span>
            <div class="absolute top-6 -z-10 h-full w-full rounded-full border border-dashed border-slate-300"></div>
          </span>
          <MailButton
            type="email"
            href="hello@workingon.studio"
            text="Reply"
            iconName="material-symbols:reply-rounded"
          />
          <MailButton text="Forward" iconName="material-symbols:forward" />
        </div>
      </div>
    </div>
    <div class="flex flex-col items-start gap-6">
      <Badge text="Automatic send" bgColor="bg-orange-100" />
      <div class="flex w-md flex-col gap-3">
        <h3>No need to even compose.</h3>
        <p>Just a single click, and Dad Reply does the rest. No compose window. No clicking send.</p>
      </div>
    </div>
    <div class="flex flex-col items-start gap-6">
      <Badge text="Approvals in seconds" bgColor="bg-orange-100" />
      <div class="flex w-md flex-col gap-3">
        <h3>Less time replying.</h3>
        <p>No more pleasantries when a simple response will do. Give people the answers they need faster.</p>
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
