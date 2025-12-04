<script lang="ts">
  import Comment from "./Comment.svelte";
</script>

<footer class="relative flex flex-row items-center justify-between py-6 text-[11px]">
  <Comment pos="bottom-12 left-6" comment={{ time: "Just now.", content: "You need to visit this site." }} />
  <a href="/" class="logo" aria-label="GoodBoy logo">
    <img src="/good-boy/logo-small-horizontal.svg" alt="icon of a cute dogs head" />
  </a>
  <ul class="flex flex-row gap-3">
    <li class="relative flex flex-row items-center gap-2">
      <Comment
        pos="bottom-8 left-16 hidden 2xl:inline-flex"
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
        <a href="/">Copywrite 2025</a>
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
