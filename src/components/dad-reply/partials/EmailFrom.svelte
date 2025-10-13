<script lang="ts">
  export let fromName: string = "";
  export let fromEmail: string = "";
  export let toEmail: string = "";
  export let avatarFilename: string = "";
</script>

<div class="flex flex-row gap-3 font-[Roboto]">
  <img src="/dad-reply/avatars/{avatarFilename}" class="hidden h-9 w-9 rounded-full md:flex" alt="" />
  <div class="flex flex-col">
    <strong class="text-xs md:text-[15px]">
      {fromName}
      <span class="text-xxs font-normal text-slate-400 md:text-xs">
        <a href="mailto:paul@workingon.studio">&lt;{fromEmail}&gt;</a>
      </span>
    </strong>
    <!-- prettier-ignore -->
    <span class="flex items-center gap-1 text-xxs md:text-xs font-normal text-slate-400"><span>to</span><span>&lt;{toEmail}&gt;</span>
      <iconify-icon icon="material-symbols:arrow-drop-down-rounded" class="text-lg w-[18px] h-[18px]"></iconify-icon>
    </span>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
