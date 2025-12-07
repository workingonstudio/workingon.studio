<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<ul class="grid auto-cols-max grid-cols-1 space-y-14 md:grid-cols-2">
  {#each projectData as { name, tagline, version, description, tags, link }, index}
    {#if index <= 6}
      <li class="project-item flex flex-col gap-5 md:flex-row">
        <iconify-icon
          icon="carbon:delivery-parcel"
          class="mt-0 text-2xl text-gray-500 transition-colors duration-300 md:mt-1.5"
        ></iconify-icon>
        <a href={link === "/" ? link : `/projects/${link}`} class="flex flex-col gap-2">
          <div class="flex flex-col gap-1.5">
            <h2>{name}</h2>
            <p class="font-satoshi">{tagline}</p>
          </div>
          <div class="flex flex-col gap-4">
            <p class="text-sm">{description}</p>
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
