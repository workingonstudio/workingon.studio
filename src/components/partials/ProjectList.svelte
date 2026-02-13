<script lang="ts">
  import projectData from "@data/projects.json";

  function getProjectLink(link: string, externalLink?: boolean) {
    if (externalLink) return link;
    return link === "/" ? link : `/projects/${link}`;
  }

  function getLinkProps(externalLink?: boolean) {
    return externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {};
  }

  $: liveProjects = projectData.filter((project) => project.shipped);
  $: inDevProjects = projectData.filter((project) => !project.shipped);
</script>

<div class="divide-surface-border flex flex-col divide-y">
  {#if inDevProjects.length > 0}
    <section class="flex flex-col gap-6 px-8 py-9 lg:px-16 lg:py-18">
      <h3 class="text-xl font-medium">In development</h3>
      <ul class="flex flex-col gap-5">
        {#each inDevProjects as { name, description, link, externalLink }}
          <li class="project-item flex flex-col gap-1">
            <a
              href={getProjectLink(link, externalLink)}
              {...getLinkProps(externalLink)}
              class="text-header flex flex-row items-center gap-2 font-medium hover:underline"
            >
              {name}
              <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
            </a>
            <p class="text-muted text-sm">{description}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/if}

  {#if liveProjects.length > 0}
    <section class="flex flex-col gap-6 px-8 py-9 lg:px-16 lg:py-18">
      <h3 class="text-xl font-medium">Live projects</h3>
      <ul class="flex flex-col gap-5">
        {#each liveProjects as { name, description, link, externalLink }}
          <li class="project-item flex flex-col gap-1">
            <a
              href={getProjectLink(link, externalLink)}
              {...getLinkProps(externalLink)}
              class="text-header flex flex-row items-center gap-2 font-medium hover:underline"
            >
              {name}
              <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
            </a>
            <p class="text-muted text-sm">{description}</p>
          </li>
        {/each}
      </ul>
    </section>
  {/if}
</div>
