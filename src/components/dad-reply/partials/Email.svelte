<script lang="ts">
  import Reply from "./Reply.svelte";
  import MailButton from "./MailButton.svelte";
  import ShareModule from "./ShareModule.svelte";
  import Emoji from "./Emoji.svelte";
  let showReply = false;
  let showShare = false;

  let replyCollection = [
    {
      emailName: "its.that.easy",
      emailContent: "👍",
    },
    {
      emailName: "slow.learner.huh",
      emailContent: "👍",
    },
    {
      emailName: "thats.it.button.disabled",
      emailContent: "👍",
    },
    {
      emailName: "who.hurt.you?",
      emailContent: "👀✌️🫵",
    },
  ];

  let replyShown: any = [];
  let currentIndex = 0;
  $: isDisabled = currentIndex >= replyCollection.length;

  function toggleReply() {
    if (isDisabled) return;

    showReply = true;

    setTimeout(() => {
      if (currentIndex < replyCollection.length) {
        replyShown = [...replyShown, replyCollection[currentIndex]];
        currentIndex++;
      }
    }, 100);
  }

  function toggleForward() {
    showShare = true;
  }
</script>

<div class="flex flex-col space-y-8 overflow-hidden">
  <div class="space-y-5">
    <div class="font-[Roboto]">
      <strong class="text-xs md:text-[15px]">
        workingon.studio <span class="text-xxs font-normal text-slate-400 md:text-xs">
          <a href="mailto:hello@workingon.studio" class="hover:text-blue-600">&lt;hello@workingon.studio&gt;</a>
        </span>
      </strong>
      <span class="text-xxs flex items-center font-normal text-slate-400 md:text-xs">
        to you
        <iconify-icon icon="material-symbols:arrow-drop-down-rounded" class="text-lg"></iconify-icon>
      </span>
    </div>
    <div class="space-y-5 *:font-[Arial] *:text-black!">
      <p>To all,</p>
      <p>
        Look, I'm tired of products that pretend to solve problems while creating new ones. Tired of "user experiences"
        designed to extract rather than delight.
      </p>
      <p class="hidden md:flex">
        So I'm building cultural mirror products. Things that hold up what people are unconsciously doing and make them
        suddenly, uncomfortably aware of it.
      </p>
      <p>
        I'm not trying to fix broken systems. I meet people where they are and change how they interact with those
        systems.
      </p>
      <p>Cheers.</p>
    </div>
    {#if showReply}
      {#each replyShown as reply}
        <Reply emailName={reply.emailName}>
          <Emoji emoji={reply.emailContent} />
        </Reply>
      {/each}
    {/if}
  </div>
  <div class="flex flex-row gap-3">
    <MailButton text="Dad Reply" clickable={true} onclick={toggleReply} disabled={isDisabled} />
    <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="material-symbols:reply-rounded" />
    <MailButton text="Forward" clickable={true} onclick={toggleForward} iconName="material-symbols:forward-rounded" />
  </div>
</div>
{#if showShare}
  <ShareModule bind:showShare />
{/if}

<style>
  @reference "@styles/dad-reply.css";
  p {
    @apply text-xs/5 md:text-sm/7;
  }
</style>
