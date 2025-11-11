<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<ul class="project-list mb-10 flex flex-col gap-12">
  {#each projectData as { name, description, version, status, tags, link }, index}
    {#if index <= 4}
      <li class="project-item">
        <a href={link === "/" ? link : `/projects/${link}`} class="space-y-4">
          <div class="content space-y-3">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
              <span class="h-8 w-8">
                <iconify-icon
                  icon="carbon:arrow-up-right"
                  class="text-3xl text-gray-500 transition-colors duration-300"
                ></iconify-icon>
              </span>
              <h2 class="flex flex-row items-center gap-2">{name}</h2>
            </div>
            <p class="lg:ml-14">
              {description}
            </p>
          </div>
          <ul class="meta flex flex-col gap-2 md:flex-row md:gap-6">
            <li class="flex flex-row items-center gap-3">
              <span class="h-[18px] w-[18px]">
                <iconify-icon icon="carbon:delivery" class="text-body text-[18px]"></iconify-icon>
              </span>
              <span>{status}</span>
            </li>
            <li class="flex flex-row items-center gap-3">
              <span class="h-[18px] w-[18px]">
                <iconify-icon icon="carbon:version" class="text-body text-[18px]"></iconify-icon>
              </span>
              <span>v{version}</span>
            </li>
            {#each tags as { icon, text }}
              <li class="flex flex-row items-center gap-3">
                <span class="h-[18px] w-[18px]">
                  <iconify-icon {icon} class="text-body text-[18px]"></iconify-icon>
                </span>
                <span>{text}</span>
              </li>
            {/each}
          </ul>
        </a>
      </li>
    {/if}
  {/each}
</ul>

<style>
  @reference "@styles/main.css";
  .project-list:has(.project-item:hover) .project-item:not(:hover) {
    @apply opacity-20 transition-opacity duration-200;
  }
  .project-item {
    @apply transition-opacity duration-200;
  }
  .project-item a {
    @apply text-body transition-colors duration-200;
  }
  .project-item:hover a {
    @apply text-primary;
  }
  .meta {
    @apply text-sm uppercase lg:ml-14;
  }
</style>
