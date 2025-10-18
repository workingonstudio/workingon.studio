<script lang="ts">
  import Badge from "@components/solidarity/partials/Badge.svelte";
  import Toggle from "@components/solidarity/partials/Toggle.svelte";
</script>

<div class="header sticky top-0 z-30 my-0 flex flex-1 border-stone-50 bg-stone-50/95 py-6 lg:my-36">
  <header class="mx-4 flex w-full flex-row items-center justify-between xl:mx-20">
    <div class="flex flex-row items-center gap-2 md:gap-6">
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
      <!-- prettier-ignore -->
      <a href="https://chromewebstore.google.com/detail/ahahliplongfboaikbajdedefpoifjeb" target="_blank" class="btn hidden md:flex">
        <iconify-icon icon="lucide:plus" class="text-lg"></iconify-icon>
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
</style>
