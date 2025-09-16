<script lang="ts">
  import Icon from "@components/Icon.svelte";
  import Badge from "@components/solidarity/partials/Badge.svelte";
</script>

<div class="header sticky top-0 my-36 flex flex-1 border-stone-50 bg-stone-50/95 py-6">
  <header class=" mx-20 flex w-full flex-row justify-between">
    <div class="flex flex-row items-center gap-6">
      <a href="" class="group flex flex-row items-center gap-2 text-stone-900">
        <span><Icon name="boolean" class_="text-3xl" /></span>
        <!-- prettier-ignore -->
        <span class="flex-inline font-mulish text-base font-extrabold uppercase tracking-[2%]">
          Solidarity<span>.</span>
        </span>
      </a>
      <Badge text="v1.0.1" bgColor="bg-stone-200" />
    </div>
    <div>
      <a href="" class="btn">
        <Icon name="plus" class_="icon-md text-[20px]" />Add to Chrome
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
    @apply font-mulish text-sm font-bold;
    @apply py-2.5 pr-4 pl-3;
    &:hover {
      @apply text-emerald-900 hover:bg-emerald-200;
    }
  }
</style>
