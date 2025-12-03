<script lang="ts">
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  let {
    comment = {
      time: "6 mins ago.",
      content: "I love the white space over here.",
    },
    delay = 1000,
    pos = "",
  } = $props();

  let show = $state(false);

  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <div class="comment flex flex-row gap-2 {pos} absolute" in:scale={{ delay, duration: 400, start: 0.8 }}>
    <iconify-icon icon="lucide:dog" class="mt-0.5 size-4 text-base"></iconify-icon>
    <div class="flex flex-col gap-0.5">
      <div class="flex flex-row items-center gap-1.5">
        <strong>Good Boy</strong>
        <span>{comment.time}</span>
      </div>
      <p>{comment.content}</p>
    </div>
  </div>
{/if}

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
