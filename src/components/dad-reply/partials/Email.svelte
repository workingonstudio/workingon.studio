<script lang="ts">
  import Reply from "./Reply.svelte";
  import MailButton from "./MailButton.svelte";
  import ShareModule from "./ShareModule.svelte";
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
      <strong class="text-[15px]">
        workingon.studio <span class="text-xs font-normal text-slate-400">
          <a href="mailto:hello@workingon.studio" class="hover:text-blue-600">&lt;hello@workingon.studio&gt;</a>
        </span>
      </strong>
      <span class="flex items-center text-xs font-normal text-slate-400">
        to you <span class="material-symbols-rounded !text-lg">arrow_drop_down</span>
      </span>
    </div>
    <div class="space-y-5 text-sm/7 *:font-[Arial] *:text-black!">
      <p>To all,</p>
      <p>Look, I'm tired of products that pretend to solve problems while creating new ones.</p>
      <p>
        Tired of "user experiences" designed to extract rather than delight. Tired of the gap between what we say we're
        building and what we're actually building.
      </p>
      <p>
        So I'm building cultural mirror products. Things that hold up what people are unconsciously doing and make them
        suddenly, uncomfortably aware of it.
      </p>
      <p>
        Not because I'm trying to fix broken systems. Because I'm meeting people where they are and changing how they
        interact with those systems.
      </p>
      <p>Cheers.</p>
    </div>
    {#if showReply}
      {#each replyShown as reply}
        <Reply emailContent={reply.emailContent} emailName={reply.emailName} />
      {/each}
    {/if}
  </div>
  <div class="flex flex-row space-x-3">
    <MailButton text="Dad Reply" clickable={true} onclick={toggleReply} disabled={isDisabled} />
    <MailButton type="email" href="hello@workingon.studio" text="Reply" iconName="reply" />
    <MailButton text="Forward" clickable={true} onclick={toggleForward} iconName="forward" />
  </div>
</div>
{#if showShare}
  <ShareModule bind:showShare />
{/if}
