<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<ul class="grid auto-cols-max grid-cols-1 space-y-14 md:grid-cols-2">
  {#each projectData as { projectIcon, name, tagline, version, description, tags, link }, index}
    {#if index <= 6}
      <li class="project-item group flex flex-col gap-5 md:flex-row">
        <iconify-icon
          icon={projectIcon}
          class="icon group-hover:text-primary text-muted mt-0 size-6 text-2xl transition-colors duration-300 md:mt-1.5"
        ></iconify-icon>
        <a href={link === "/" ? link : `/projects/${link}`} class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h2>{name}</h2>
            <div class="flex flex-col gap-0.5">
              <p class="font-satoshi text-xl">{tagline}</p>
              <p class="text-muted text-base">{description}</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <ul class="meta flex flex-row gap-4">
              <li class="flex flex-row items-center gap-2">
                <iconify-icon icon="carbon:version" class="text-body size-4 text-base"></iconify-icon>
                <span>v{version}</span>
              </li>
              {#each tags as { icon, text }}
                <li class="flex flex-row items-center gap-2">
                  <iconify-icon {icon} class="text-body size-4 text-base"></iconify-icon>
                  <span>{text}</span>
                </li>
              {/each}
            </ul>
          </div>
        </a>
      </li>
    {/if}
  {/each}
</ul>

<style>
  @reference "@styles/main.css";
  a {
    &:hover {
      h2 {
        @apply underline;
      }
    }
  }
  .meta {
    @apply text-xxs text-muted font-bold uppercase;
  }
</style>
