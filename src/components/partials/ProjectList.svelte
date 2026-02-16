<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";
  import projectData from "@data/projects.json";

  export const borderBottom: boolean = false;
  export const borderRight: boolean = false;

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

{#if inDevProjects.length > 0}
  <ContentPanel noPadding={false}>
    <h2 class="text-xl font-medium">Currently building</h2>
    <ul class="stack">
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
  </ContentPanel>
{/if}

{#if liveProjects.length > 0}
  <ContentPanel noPadding={false}>
    <h2 class="text-xl font-medium">Live projects</h2>
    <ul class="stack">
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
  </ContentPanel>
{/if}
