<script lang="ts">
  export let name: string;
  export let title: string;
  export let src: string;
  export let blurred: boolean;

  $: isBlurred = blurred ? "blur-[1.5px]" : "blur-none";
</script>

<div class="flex w-full flex-row gap-5 rounded-2xl bg-stone-100 p-6 {isBlurred}">
  <img {src} alt="" class="h-10 w-10 rounded-full border-transparent" />
  <div class="flex flex-col">
    <span class="font-mulish text-base font-bold">{name}</span>
    <span class="font-lora text-xs text-stone-700">{title}</span>
  </div>
</div>

<style>
  @reference "@styles/solidarity.css";
</style>
