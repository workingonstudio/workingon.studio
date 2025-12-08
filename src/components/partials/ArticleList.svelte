<script>
  let articles = [
    {
      title: "It's an art form, prepare to put in the work.",
      subtitle: "What it takes to become a better designer.",
      excerpt: "It’s time to stop flogging that horse, drag it to the abattoir, and start grinding the burgers.",
      href: "https://aquietfracture.substack.com/p/prepare-to-put-in-the-work",
    },
    {
      title: "Look for those that are doing the opposite.",
      subtitle: "They are doing far more important things.",
      excerpt:
        "The best designers don't switch their mindset to fit in with the zeitgeist narrative, they look to create the next one.",
      href: "https://aquietfracture.substack.com/p/look-out-for-those-that-are-doing",
    },
    {
      title: "It's time to kill the Design Challenge.",
      subtitle: "Comedians don’t perform on command.",
      excerpt:
        "Asking them to distill that into a 3-4 hour design task? It’s the equivalent of asking a comedian to make you laugh on the spot.",
      href: "https://aquietfracture.substack.com/p/its-time-to-kill-the-design-challenge",
    },
    {
      title: "Design's not dead. We just gave in.",
      subtitle: "What happens when creativity becomes compliance.",
      excerpt:
        "Our shyness and empathy has allowed the needle of needs to swing too far in favour of leaders, rather than users.",
      href: "https://aquietfracture.substack.com/p/designs-not-dead-we-just-gave-in",
    },
  ];
</script>

<ul class="articles">
  {#each articles as { title, subtitle, excerpt, href }}
    <li class="flex flex-col gap-4 md:flex-row">
      <iconify-icon icon="carbon:blog" class="text-muted mt-0 size-8 text-2xl md:mt-1.5"></iconify-icon>
      <a {href}>
        <h2>{title}</h2>
        <div class="flex flex-col gap-0.5">
          <p class="font-satoshi text-xl">{subtitle}</p>
          <p class="text-muted text-base">{excerpt}</p>
        </div>
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
