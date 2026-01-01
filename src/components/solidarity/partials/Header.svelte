<script lang="ts">
  import Badge from "@components/solidarity/partials/Badge.svelte";
</script>

<div class="header sticky top-0 z-30 my-20 flex flex-1 bg-stone-50/95 py-6">
  <header class="mx-4 flex w-full flex-row items-center justify-between xl:mx-20">
    <div class="flex flex-row items-center gap-2 md:gap-6">
      <a href="#top" class="group text-header flex flex-row items-center gap-2">
        <iconify-icon icon="material-symbols:radio-button-partial" class="group-spin-drop text-2xl"></iconify-icon>
        <!-- prettier-ignore -->
        <span class="flex-inline font-mulish text-sm font-extrabold uppercase tracking-[1%]">
          Solidarity
        </span>
      </a>
      <Badge text="v1.0.1" bgColor="bg-gray-100" />
    </div>
    <nav>
      <ul class="flex flex-row items-center gap-6 text-sm">
        <li><a href="#how">How it works</a></li>
        <li><a href="#why">Why</a></li>
        <li class="hidden md:flex">
          <a href="https://chromewebstore.google.com/detail/ahahliplongfboaikbajdedefpoifjeb">Add to Chrome</a>
        </li>
      </ul>
    </nav>
  </header>
</div>

<style>
  @reference "@styles/solidarity.css";
  nav {
    a {
      @apply text-body;
      &:hover {
        @apply underline;
      }
    }
  }
</style>
