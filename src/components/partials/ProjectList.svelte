<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<ul class="project-list grid auto-cols-max grid-cols-1 space-y-12 md:grid-cols-2">
  {#each projectData as { name, description, version, status, tags, link }, index}
    {#if index <= 6}
      <li class="project-item">
        <a href={link === "/" ? link : `/projects/${link}`} class="space-y-4">
          <div class="content space-y-3">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
              <span class="mt-1 size-6">
                <iconify-icon
                  icon="carbon:delivery-parcel"
                  class="arrow text-2xl text-gray-500 transition-colors duration-300"
                ></iconify-icon>
              </span>
              <h2 class="flex flex-row items-center gap-2">{name}</h2>
            </div>
            <p class="m-0 lg:ml-12">
              {description}
            </p>
          </div>
          <ul class="meta flex flex-col gap-2 md:flex-row md:gap-6">
            <li class="flex flex-row items-center gap-2">
              <span class="size-4">
                <iconify-icon icon="carbon:version" class="text-body text-base"></iconify-icon>
              </span>
              <span>v{version}</span>
            </li>
            {#each tags as { icon, text }}
              <li class="flex flex-row items-center gap-2">
                <span class="size-4">
                  <iconify-icon {icon} class="text-body text-base"></iconify-icon>
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
  .meta {
    @apply text-xxs text-muted font-bold uppercase lg:ml-12;
  }
</style>
