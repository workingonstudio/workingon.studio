<script lang="ts">
  import Badge from "@components/solidarity/partials/Badge.svelte";
  import Toggle from "@components/solidarity/partials/Toggle.svelte";
</script>

<div class="header sticky top-0 z-30 my-36 flex flex-1 border-stone-50 bg-stone-50/95 py-6">
  <header class=" mx-20 flex w-full flex-row justify-between">
    <div class="flex flex-row items-center gap-6">
      <a href="#top" class="group flex flex-row items-center gap-2 text-stone-900">
        <iconify-icon icon="carbon:boolean" class="group-spin-drop text-3xl"></iconify-icon>
        <!-- prettier-ignore -->
        <span class="flex-inline font-mulish text-base font-extrabold uppercase tracking-[2%]">
          Solidarity<span>.</span>
        </span>
      </a>
      <Badge text="v1.0.1" bgColor="bg-stone-200" />
    </div>
    <div class="flex flex-row items-center gap-6">
      <Toggle id="toggled" />
      <a href="https://chromewebstore.google.com/detail/ahahliplongfboaikbajdedefpoifjeb" target="_blank" class="btn">
        <iconify-icon icon="carbon:add" class="text-2xl"></iconify-icon>
        Add to Chrome
      </a>
    </div>
  </header>
</div>

<style>
  @reference "@styles/solidarity.css";
  span {
    span {
      @apply text-primary;
    }
  }
  .btn {
    @apply flex flex-row items-center gap-2;
    @apply rounded-full bg-emerald-300;
    @apply font-mulish text-sm font-bold text-emerald-900;
    @apply py-2 pr-4 pl-3;
    &:hover {
      @apply hover:bg-emerald-200;
    }
  }
</style>
