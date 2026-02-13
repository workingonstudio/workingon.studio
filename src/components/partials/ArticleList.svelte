<script>
  let articles = [
    {
      title: "Design's not dead. We just gave in.",
      subtitle: "What happens when creativity becomes compliance.",
      href: "https://aquietfracture.substack.com/p/designs-not-dead-we-just-gave-in",
    },
    {
      title: "It's an art form, prepare to put in the work.",
      subtitle: "What it takes to become a better designer.",
      href: "https://aquietfracture.substack.com/p/prepare-to-put-in-the-work",
    },
    {
      title: "Look for those that are doing the opposite.",
      subtitle: "They are doing far more important things.",
      href: "https://aquietfracture.substack.com/p/look-out-for-those-that-are-doing",
    },
    {
      title: "It's time to kill the Design Challenge.",
      subtitle: "Comedians don’t perform on command.",
      href: "https://aquietfracture.substack.com/p/its-time-to-kill-the-design-challenge",
    },
  ];
</script>

<section class="content gap-6">
  <h2 class="text-xl font-medium">Writing</h2>
  <ul class="flex flex-col gap-5">
    {#each articles as { title, subtitle, href }}
      <li class="flex flex-col gap-1">
        <a {href} class="text-header flex flex-row items-center gap-2 font-medium hover:underline">
          {title}
          <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
        </a>
        <p class="text-muted text-sm">{subtitle}</p>
      </li>
    {/each}
  </ul>
</section>

<style>
  @reference "@styles/main.css";
</style>
