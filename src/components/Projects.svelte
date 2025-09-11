<script lang="ts">
  import Icon from "@components/Icon.svelte";
  import projectData from "@data/projects.json";
</script>

<section class="mt-32 max-w-md space-y-12">
  <ul class="mb-6 space-y-12">
    {#each projectData as project}
      <li class="space-y-4">
        <div class="space-y-3">
          <h2 class="flex flex-row items-center">
            <Icon name={project.icon} class_="text-lg mr-2" />{project.name}
          </h2>
          <p class="text-sm">
            {project.description}
          </p>
        </div>
        <ul class="meta">
          <li>
            <span class="indicator {project.status}"></span>
            {project.status}
          </li>
          <li>v{project.version.toFixed(1)}</li>
          {#each project.tags as tag}
            <li>{tag}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</section>

<style>
  @reference "@styles/global.css";
  h2 {
    color: var(--color-text-primary);
  }
  p {
    color: var(--color-text-body);
  }
  .meta {
    @apply text-xxs flex flex-row space-x-2;
    li {
      @apply flex flex-row items-center rounded-full bg-gray-800 px-2 py-0.5 first:uppercase;
    }
  }
  .indicator {
    @apply text-xxs mr-2 inline-block h-1.5 w-1.5 rounded-full;
    &.live {
      @apply bg-emerald-500;
    }
    &.draft {
      @apply bg-amber-500;
    }
  }
</style>
