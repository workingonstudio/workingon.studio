<script lang="ts">
  import Comment from "./Comment.svelte";

  const features = [
    {
      icon: "lucide:ban",
      title: "No need to post to social media.",
      description: "Get the mindless reactions you would get from posting from the comfort of your figma bubble.",
    },
    {
      icon: "lucide:message-circle-heart",
      title: "Get constant re-assurance.",
      description:
        "You feel like you don't belong. People keep telling you otherwise, so maybe you'll listen to a plugin? Worth a shot.",
    },
    {
      icon: "lucide:circle-check",
      title: "Generic low effort feedback.",
      description: "You get it elsewhere. Now get it instantly. Nothing too clear. The “make it pop” of figma plugins.",
    },
  ];
</script>

<div class="flex flex-row justify-center">
  <div class="flex flex-row justify-between gap-12">
    {#each features as { icon, title, description }, index}
      <div class="flex w-sm flex-col gap-3">
        <div class="relative flex flex-row items-center gap-3">
          {#if index === 0}
            <Comment pos="bottom-10 -right-8" comment={{ time: "14 mins ago.", content: "This copy is great!" }} />
          {/if}
          <iconify-icon {icon} class="text-2xl"></iconify-icon>
          <h4>{title}</h4>
        </div>
        <p class="text-sm text-pretty">{description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/good-boy.css";
</style>
