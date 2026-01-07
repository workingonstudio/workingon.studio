<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<ul class="grid auto-cols-max grid-cols-1 gap-14 md:grid-cols-2">
  {#each projectData as { projectIcon, name, tagline, description, link }, index}
    {#if index <= 6}
      <li class="project-item group flex flex-col items-start gap-4">
        <div class="bg-surface border-surface-border flex flex-row rounded-xl border p-2">
          <iconify-icon
            icon={projectIcon}
            class="icon text-primary size-6 text-2xl transition-colors duration-300"
          ></iconify-icon>
        </div>
        <a href={link === "/" ? link : `/projects/${link}`} class="flex flex-col gap-3">
          <h2>
            {name}
          </h2>
          <p class="text-muted text-base italic">{tagline}</p>
          <p>{description}</p>
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
