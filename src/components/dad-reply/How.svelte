<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import EmailFrom from "./partials/EmailFrom.svelte";
</script>

<div class="flex flex-col gap-24">
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Nothing to learn" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>Added directly in Gmail.</h4>
        <p>Sitting along side the reply button like it’s always been there.*</p>
        <small>* Unlike my dad.</small>
      </div>
    </div>
    <div class="-gap-6 -z-20 flex w-2/5 flex-col rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8">
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
        <small>Division Vice President</small>
      </div>
      <div class="flex flex-row items-end gap-4">
        <span class="the-shadow relative mb-6 rounded-full bg-white">
          <span class="z-10">
            <MailButton text="Got it" />
          </span>
          <div class="absolute top-6 -z-10 h-full w-full rounded-full border border-dashed border-slate-400"></div>
        </span>
        <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="material-symbols:reply-rounded" />
        <MailButton text="Forward" iconName="material-symbols:forward" />
      </div>
    </div>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col gap-8 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-8 py-8">
      <div class="flex flex-col gap-4">
        <EmailFrom
          avatarFilename="me-shoe.png"
          fromName="You"
          fromEmail="paul@workingon.studio"
          toEmail="sam.malone@cheersbar.net"
        />
        <div class="ml-0 flex flex-col gap-2 sm:ml-12">
          👍
          <a
            class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
            href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
          >
            via dad reply
          </a>
        </div>
      </div>
      <div class="relative ml-12 flex h-9 flex-row items-end gap-4">
        <div class="absolute left-0 flex w-96 flex-row gap-3">
          <MailButton text="Got it" />
          <MailButton text="Reply" iconName="material-symbols:reply-rounded" />
          <MailButton text="Forward" iconName="material-symbols:forward" />
        </div>
      </div>
    </div>
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Automatic send" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>No need to even compose.</h4>
        <p>Just a single click, and Dad Reply does the rest. No compose window. No clicking send.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row items-center justify-center gap-12 py-12 text-pretty">
    <div class="flex w-2/5 flex-col items-start gap-6">
      <Badge text="Approvals in seconds" bgColor="bg-orange-100" />
      <div class="flex flex-col gap-3">
        <h4>Less time replying.</h4>
        <p>No more pleasantries when a simple response will do. Give people the answers they need faster.</p>
        <p>Get back to real work.</p>
      </div>
    </div>
    <div class="flex w-2/5 flex-col items-center -space-y-12">
      <div class="flex scale-85 flex-col rounded-xl border border-gray-300 px-12 py-8">
        <div class="relative flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="You"
            fromEmail="paul@workingon.studio"
            toEmail="bob.kelso@sacredhearthospital.com"
          />
          <div class="ml-0 flex flex-col gap-2 sm:ml-12">
            👍
            <a
              class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
              href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            >
              via dad reply
            </a>
          </div>
        </div>
      </div>
      <div class="the-shadow z-10 flex flex-col rounded-xl border border-gray-300 bg-white px-12 py-8">
        <div class="flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="You"
            fromEmail="paul@workingon.studio"
            toEmail="buck.strickland@stricklandpropane.com"
          />
          <div class="ml-0 flex flex-col gap-2 sm:ml-12">
            👍
            <a
              class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
              href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            >
              via dad reply
            </a>
          </div>
        </div>
      </div>
      <div class="flex scale-85 flex-col rounded-xl border border-gray-300 px-12 py-8">
        <div class="relative flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="Paul Mackenzie"
            fromEmail="paul@workingon.studio"
            toEmail="bill.lumbergh@initech.com"
          />
          <div class="ml-0 flex flex-col gap-2 sm:ml-12">
            👍
            <a
              class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
              href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            >
              via dad reply
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
