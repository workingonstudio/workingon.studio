<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import MailButton from "./partials/MailButton.svelte";
  import Emoji from "./partials/Emoji.svelte";
  import EmailFrom from "./partials/EmailFrom.svelte";
  import SectionHeader from "./partials/SectionHeader.svelte";
</script>

<div id="how" class="flex flex-col gap-24">
  <SectionHeader
    emoji="🧐"
    header="As ridiculous as it sounds."
    body="The perfect companion for <s>the email power user</s>
      email."
  />

  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col items-start gap-6 md:w-2/3 lg:w-2/5">
      <Badge text="Nothing to learn" bgColor="bg-blue-100" />
      <div class="flex flex-col gap-3">
        <h4>Added directly in Gmail.</h4>
        <p>Sitting along side the reply button like it’s always been there.*</p>
        <small>* Unlike my dad.</small>
      </div>
    </div>
    <div
      class="-gap-6 -z-20 flex w-90 flex-col rounded-bl-xl border-b-1 border-l-1 border-gray-300 py-8 pl-6 md:w-auto md:pl-12 lg:w-2/5"
    >
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Marcus Rivera</strong>
        <small>Senior Frontend Engineer</small>
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
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div
      class="flex w-90 flex-col gap-8 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-8 py-8 md:w-3/5 lg:w-2/5"
    >
      <div class="flex flex-col gap-4">
        <EmailFrom
          avatarFilename="me-shoe.png"
          fromName="You"
          fromEmail="paul@workingon.studio"
          toEmail="sam.malone@cheersbar.net"
        />
        <div class="ml-0 flex flex-col gap-2 sm:ml-12">
          <Emoji class_="mr-2 emoji" emoji="👍" />
          <a
            class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
            href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
          >
            via dad reply
          </a>
        </div>
      </div>
      <div class="relative flex h-9 flex-row items-end gap-4 lg:ml-12">
        <div class="absolute flex w-full flex-row items-stretch gap-3">
          <MailButton text="Got it" />
          <div class="flex flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:h-9"></div>
          <div class="flex flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:h-9"></div>
        </div>
      </div>
    </div>
    <div class="order-first flex w-90 flex-col items-start gap-6 md:w-2/3 lg:order-0 lg:w-2/5">
      <Badge text="Automatic send" bgColor="bg-blue-100" />
      <div class="flex flex-col gap-3">
        <h4>Reply with a single click.</h4>
        <p>No need to compose, just a single click, and Dad Reply does the rest.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col items-start gap-6 md:w-2/3 lg:w-2/5">
      <Badge text="Save time" bgColor="bg-blue-100" />
      <div class="flex flex-col gap-3">
        <h4>Approve in seconds.</h4>
        <p>No more pleasantries when a simple response will do. Give people the answers they need faster.</p>
      </div>
    </div>
    <div class="flex flex-col items-center -space-y-12 lg:w-2/5">
      <div class="flex w-100 scale-85 flex-col rounded-xl border border-gray-300 p-8">
        <div class="relative flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="You"
            fromEmail="paul@workingon.studio"
            toEmail="andrew@workingon.studio"
          />
          <div class="ml-0 flex flex-col gap-2 md:ml-12">
            <Emoji class_="mr-2 emoji" emoji="👍" />
            <a
              class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
              href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            >
              via dad reply
            </a>
          </div>
        </div>
      </div>
      <div class="the-shadow z-10 flex w-100 flex-col rounded-xl border border-gray-300 bg-white p-8">
        <div class="flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="You"
            fromEmail="paul@workingon.studio"
            toEmail="liz@workingon.studio"
          />
          <div class="ml-0 flex flex-col gap-2 md:ml-12">
            <Emoji class_="mr-2 emoji" emoji="👍" />
            <a
              class="text-xxs font-[Arial] font-normal text-slate-400 md:text-xs"
              href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            >
              via dad reply
            </a>
          </div>
        </div>
      </div>
      <div class="flex w-100 scale-85 flex-col rounded-xl border border-gray-300 p-8">
        <div class="relative flex flex-col gap-4">
          <EmailFrom
            avatarFilename="me-shoe.png"
            fromName="Paul Mackenzie"
            fromEmail="paul@workingon.studio"
            toEmail="thomas@workingon.studio"
          />
          <div class="ml-0 flex flex-col gap-2 md:ml-12">
            <Emoji class_="mr-2 emoji" emoji="👍" />
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
