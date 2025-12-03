<script lang="ts">
  export let comment = {
    time: "6 mins ago.",
    content: "I love the white space over here.",
  };
  export let pos: string = "";
</script>

<div class="comment flex flex-row gap-2 {pos} absolute">
  <iconify-icon icon="lucide:dog" class="mt-0.5 size-4 text-base"></iconify-icon>
  <div class="flex flex-col gap-0.5">
    <div class="flex flex-row items-center gap-1.5">
      <strong>Good Boy</strong>
      <span>{comment.time}</span>
    </div>
    <p>{comment.content}</p>
  </div>
</div>

<style>
  @reference "@styles/good-boy.css";
  .comment {
    @apply w-[220px] px-3 py-2;
    @apply place-self-center rounded-xl rounded-bl-none border border-stone-300 bg-stone-50 text-[11px] shadow-lg;
    span {
      @apply text-stone-400;
    }
    p {
      @apply text-left text-[11px];
    }
  }
</style>
