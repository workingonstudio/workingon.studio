<script lang="ts">
  import Icon from "@components/Icon.svelte";
  export let quote;
  export let cite;
  export let link: string;
  export let gridSetting;
  export let itemAlign;
  export let textSize;
</script>

<div
  class="radius-md container flex flex-col space-y-3 rounded-[14px] border border-slate-300 bg-white p-8 font-medium {gridSetting} transition-shadow hover:cursor-default hover:shadow-lg"
>
  <Icon name="quote" class_="mr-2 text-blue-600 text-2xl" />
  <div class="flex flex-1 flex-col justify-between space-y-3">
    <div class="flex flex-1 {itemAlign}">
      <blockquote class="{textSize} text-pretty">{@html quote}</blockquote>
    </div>
    <a href={link}><cite class="text-sm text-slate-500 not-italic">{cite}</cite></a>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
