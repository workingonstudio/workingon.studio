<script lang="ts">
  import MailButton from "./MailButton.svelte";
</script>

<div class="flex flex-col space-y-8 overflow-hidden text-black">
  <div class="space-y-5">
    <div class="font-[Roboto]">
      <strong class="text-[15px]">
        workingon.studio <span class="text-xs font-normal text-slate-400">
          &lt;
          <a href="mailto:hello@workingon.studio">hello@workingon.studio</a>
          &gt;
        </span>
      </strong>
      <span class="flex items-center text-xs font-normal text-slate-400">
        to you <span class="material-symbols-rounded !text-lg">arrow_drop_down</span>
      </span>
    </div>
    <div class="space-y-5 font-[Arial] text-sm/7">
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
  </div>
  <div class="flex flex-row space-x-3">
    <MailButton text="Dad Reply" />
    <MailButton text="Reply" icon="reply-rounded" />
    <MailButton text="Forward" icon="forward-rounded" />
  </div>
</div>
