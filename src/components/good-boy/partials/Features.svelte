<script lang="ts">
  import Comment from "./Comment.svelte";

  const features = [
    {
      icon: "lucide:ban",
      title: "No need to post to social media.",
      description: "Get the mindless reactions you would get from posting from the comfort of your Figma bubble.",
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
      description: "You get it elsewhere. Now get it instantly. Nothing too clear. The “make it pop” of Figma plugins.",
    },
  ];
</script>

<div class="flex flex-row justify-center pb-30 2xl:pb-0">
  <div class="flex flex-col justify-between gap-12 md:flex-row">
    {#each features as { icon, title, description }, index}
      <div class="flex w-sm flex-col gap-3 md:w-full md:items-start xl:w-sm">
        <div class="relative flex flex-col items-center gap-3 md:items-start">
          {#if index === 0}
            <Comment pos="bottom-20 left-20 md:-right-8" comment={{ time: "14 mins ago.", content: "Great copy!" }} />
          {/if}
          <iconify-icon {icon} class="size-6 text-2xl"></iconify-icon>
          <h4>{title}</h4>
        </div>
        <p class="text-center text-sm text-pretty md:text-left">{description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/good-boy.css";
</style>
