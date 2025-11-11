<script>

  let articles = [{
    title : "It's an art form, prepare to put in the work.",
    description : "What it takes to become a better designer.",
    href : "/",
    icon : "paint-brush"
  },
  {
    title : "Look for those that are doing the opposite.",
    description : "They are doing far more important things.",
    href : "/",
    icon : "view"
  },
  {
    title : "It's time to kill the Design Challenge.",
    description : "Comedians don’t perform on command.",
    href : "/",
    icon : "test-tool"
  },
  {
    title : "Design's not dead. We just gave in.",
    description : "What happens when creativity becomes compliance.",
    href : "/",
    icon : "fade"
  },
]

</script>

<ul class="articles">
  {#each articles as {title, description, href, icon}}
  <li>
    <a {href} class="group">
      <span class="h-8 w-8">
        <iconify-icon
          icon={"carbon:" + icon}
          class="group-hover:text-primary text-3xl text-gray-500 transition-colors duration-300">
        </iconify-icon>
      </span>
      <div class="flex flex-col gap-2">
        <h2>{title}</h2>
        <p>{description}</p>
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
      @apply flex flex-col md:flex-row gap-6;
      time {
        @apply text-xs uppercase text-muted;
      }
      h2 {
        @apply text-3xl;
      }
    }
  }
</style>
