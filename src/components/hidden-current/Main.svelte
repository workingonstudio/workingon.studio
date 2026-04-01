<script lang="ts">
  import Browser from "./partials/Browser.svelte";
</script>

<div class="flex w-3xl flex-col items-center gap-12">
  <a href="" title="" class="flex flex-row gap-2">
    <iconify-icon
      icon="material-symbols:energy-savings-leaf-outline"
      class="size-6 text-2xl text-emerald-500"
    ></iconify-icon>
    <span class="text-primary text-base font-black tracking-tight">Hidden Current</span>
  </a>
  <div class="flex flex-col gap-6 text-center">
    <h1>Your prompts really are costing the earth.</h1>
    <p class="text-xl">Track how much water and power your prompts are using.*</p>
  </div>
  <a
    href="/"
    class="hover:border-primary hover:text-primary flex flex-row items-center gap-4.5 rounded-full border-3 border-transparent bg-neutral-900 px-5 py-4 text-base font-bold text-white transition-colors duration-300 hover:border-3 hover:bg-white"
  >
    <iconify-icon icon="fa7-brands:chrome" class="size-6 text-2xl"></iconify-icon>
    Add to Chrome
  </a>
  <Browser />
</div>
