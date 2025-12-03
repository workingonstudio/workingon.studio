<script lang="ts">
  import Comment from "./Comment.svelte";
</script>

<footer class="relative flex flex-row items-center justify-between py-6 text-[11px]">
  <Comment pos="bottom-12 left-6" comment={{ time: "Just now.", content: "You need to visit this site." }} />
  <a href="/" class="logo">
    <img src="/good-boy/logo-small-horizontal.svg" />
  </a>
  <ul class="flex flex-row gap-3">
    <li class="relative flex flex-row items-center gap-2">
      <Comment
        pos="bottom-8 left-16 hidden 2xl:inline-flex"
        comment={{ time: "2 mins ago.", content: "Perfect font pairing" }}
      />
      <iconify-icon icon="lucide:text-initial" class="text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="">Oswald</a>
        <span>+</span>
        <a href="/">Inter</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:paintbrush" class="text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="">Designed in Sketch</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:copyright" class="text-base"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="">Copywrite 2025</a>
      </div>
    </li>
  </ul>
</footer>

<style>
  @reference "@styles/good-boy.css";
</style>
