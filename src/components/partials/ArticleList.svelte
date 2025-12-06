<script>
  let articles = [
    {
      title: "It's an art form, prepare to put in the work.",
      description: "What it takes to become a better designer.",
      href: "https://aquietfracture.substack.com/p/prepare-to-put-in-the-work",
    },
    {
      title: "Look for those that are doing the opposite.",
      description: "They are doing far more important things.",
      href: "https://aquietfracture.substack.com/p/look-out-for-those-that-are-doing",
    },
    {
      title: "It's time to kill the Design Challenge.",
      description: "Comedians don’t perform on command.",
      href: "https://aquietfracture.substack.com/p/its-time-to-kill-the-design-challenge",
    },
    {
      title: "Design's not dead. We just gave in.",
      description: "What happens when creativity becomes compliance.",
      href: "https://aquietfracture.substack.com/p/designs-not-dead-we-just-gave-in",
    },
  ];
</script>

<ul class="articles">
  {#each articles as { title, description, href }}
    <li>
      <a {href}>
        <div class="flex flex-col gap-5 md:flex-row md:items-center">
          <iconify-icon
            icon="carbon:license-draft"
            class="mt-0 size-8 text-2xl text-gray-500 transition-colors duration-300 md:mt-1.5"
          ></iconify-icon>
          <h2>{title}</h2>
        </div>
        <p class="md:ml-14">{description}</p>
      </a>
    </li>
  {/each}
</ul>

<style>
  @reference "@styles/main.css";
  .articles {
    @apply flex flex-col gap-12;
    a {
      @apply flex flex-col gap-2 transition-opacity duration-200;
      &:hover {
        h2 {
          @apply underline;
        }
      }
    }
  }
</style>
