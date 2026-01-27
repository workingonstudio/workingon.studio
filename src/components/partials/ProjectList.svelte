<script lang="ts">
  import projectData from "@data/projects.json";

  function getProjectLink(link: string, externalLink?: string) {
    if (externalLink === "true") return link;
    return link === "/" ? link : `/projects/${link}`;
  }

  function getLinkProps(externalLink?: string) {
    return externalLink === "true" ? { target: "_blank", rel: "noopener noreferrer" } : {};
  }
</script>

<ul class="grid auto-cols-max grid-cols-1 gap-14 md:grid-cols-2">
  {#each projectData as { projectIcon, name, tagline, description, link, img, externalLink }, index}
    {#if index <= 7}
      <li class="project-item group flex flex-col items-start gap-4">
        <div class="bg-surface border-surface-border flex flex-row rounded-xl border p-2">
          <iconify-icon
            icon={projectIcon}
            class="icon text-primary size-6 text-2xl transition-colors duration-300"
          ></iconify-icon>
        </div>
        <a href={getProjectLink(link, externalLink)} {...getLinkProps(externalLink)} class="flex flex-col gap-8">
          <img src="/projectscreens/{img}" class="border-surface-border w-fill rounded-xl border 2xl:max-w-2xl" />
          <div class="flex flex-col gap-3">
            <h2>
              {name}
            </h2>
            <p class="text-muted text-base italic">{tagline}</p>
            <p>{description}</p>
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
</style>
