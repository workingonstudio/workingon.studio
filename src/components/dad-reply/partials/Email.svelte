<script lang="ts">
  import Reply from "./Reply.svelte";
  import MailButton from "./MailButton.svelte";
  import ShareModule from "./ShareModule.svelte";
  import Emoji from "./Emoji.svelte";
  import EmailFrom from "./EmailFrom.svelte";
  import Indicator from "./Indicator.svelte";
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
  <div class="mb-8 space-y-5">
    <EmailFrom avatarFilename="mario.jpeg" fromName="Mario Fernando" fromEmail="mario@workingon.studio" toEmail="you" />
    <div class="ml-0 space-y-5 *:font-['Arial'] *:text-black! sm:ml-12">
      <p>Hey,</p>
      <p>
        Just wanted to confirm we're still on track for the Friday deadline?
        <br />
        Let me know if anything's changed.
      </p>
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Mario Fernando</strong>
        <small>Sr. Full Stack Software Engineer</small>
      </div>
    </div>
    {#if showReply}
      {#each replyShown as reply}
        <Reply emailName={reply.emailName}>
          <Emoji emoji={reply.emailContent} />
        </Reply>
      {/each}
    {/if}
  </div>
  <div class="relative ml-0 flex flex-row gap-3 sm:ml-12">
    <MailButton text="Try it" clickable={true} onclick={toggleReply} disabled={isDisabled} />
    <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="material-symbols:reply-rounded" />
    <div class="lg:hidden xl:flex">
      <MailButton text="Forward" clickable={true} onclick={toggleForward} iconName="material-symbols:forward" />
    </div>
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
