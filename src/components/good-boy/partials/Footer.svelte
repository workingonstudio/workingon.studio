<script lang="ts">
  import Comment from "./Comment.svelte";
</script>

<footer class="relative flex flex-col justify-between gap-4 py-6 text-[11px] md:flex-row md:items-center md:gap-0">
  <Comment pos="md:bottom-12 -top-10 left-6" comment={{ time: "Just now.", content: "You need to visit this site." }} />
  <a href="/" class="logo" aria-label="GoodBoy logo">
    <img src="/good-boy/logo-small-horizontal.svg" alt="icon of a cute dogs head" />
  </a>
  <ul class="flex flex-col gap-3 md:flex-row">
    <li class="relative flex flex-row items-center gap-2">
      <Comment
        pos="md:bottom-8 bottom-0 left-16 hidden 2xl:inline-flex"
        comment={{ time: "2 mins ago.", content: "Perfect font pairing" }}
      />
      <iconify-icon icon="lucide:text-initial" class="size-4 text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="https://www.fontshare.com/fonts/oswald">Oswald</a>
        <span>+</span>
        <a href="https://rsms.me/inter/">Inter</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:paintbrush" class="size-4 text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="https://sketch.com">Designed in Sketch</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:copyright" class="size-4 text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="/">Copywrite 2026</a>
      </div>
    </li>
  </ul>
</footer>

<style>
  @reference "@styles/good-boy.css";
  ul {
    li {
      a {
        @apply hover:underline;
      }
    }
  }
</style>
