<script lang="ts">
  import Comment from "./partials/Comment.svelte";
</script>

<div class="flex flex-col gap-24">
  <Comment pos="left-10 hidden md:inline-flex" delay={800} />
  <div class="logo flex flex-row items-center gap-2 place-self-center">
    <iconify-icon icon="lucide:dog" class="size-6 text-2xl"></iconify-icon>
    <a href="/projects/good-boy">GoodBoy</a>
  </div>
  <div class="mb-18 flex flex-col justify-center gap-30">
    <div class="relative flex flex-col gap-6 place-self-center text-center">
      <Comment
        pos="md:-right-[200px] -top-12"
        comment={{ time: "3 mins ago.", content: "This is so clean!" }}
        delay={1200}
      />
      <h1>Get the praise you crave.</h1>
      <p class="text-xl">The only Figma plugin you need to feel like you’re doing a good job.</p>
    </div>
    <div class="relative flex flex-col place-self-center">
      <Comment
        pos="md:-right-[235px] -right-40 -top-16"
        comment={{ time: "1 hour ago.", content: "This button is amazing." }}
        delay={1600}
      />
      <a
        href="https://www.figma.com/community/plugin/1578374402716063422"
        class="button flex flex-row items-center gap-4"
      >
        <iconify-icon icon="logos:figma" class="text-xl"></iconify-icon>
        Add to Figma
      </a>
    </div>
  </div>
</div>

<style>
  @reference "@styles/good-boy.css";
  .logo {
    @apply items-end;
    a {
      @apply mb-3 rounded-xl rounded-bl-none border border-stone-900 bg-stone-800 px-3 py-0.5 pb-1 font-[Oswald] text-base font-medium text-stone-50;
      &:hover {
        @apply border border-stone-200 bg-stone-100 text-stone-800 transition-colors;
      }
    }
  }
  .button {
    @apply cursor-pointer place-self-center rounded-lg border border-stone-600 bg-stone-800 px-4 py-2 font-[Roboto] font-semibold tracking-wide text-stone-50 ring ring-stone-800 text-shadow-sm;
  }
</style>
