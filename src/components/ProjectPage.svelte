<script lang="ts">
  import ContentPanel from "@components/partials/ContentPanel.svelte";
  import { DateTime } from "luxon";

  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);

  interface Project {
    slug: string;
    title: string;
    description: string;
    link: string;
    externalLink: boolean;
    download: string | null;
    image: string;
    isNew: boolean;
  }

  let { projectData }: { projectData: Project[] } = $props();

  function getProjectLink(link: string, externalLink: boolean) {
    if (externalLink) return link;
    return `/projects/${link}`;
  }

  function getLinkProps(externalLink: boolean) {
    return externalLink ? { target: "_blank", rel: "noopener noreferrer" } : {};
  }
</script>

<ContentPanel borderBottom>
  <h1>
    {daysSince} days passed.
    <br />
    {projectData.length} projects, still going.
  </h1>
</ContentPanel>

<div class="flex flex-col divide-y">
  {#each projectData as project}
    <div class="flex flex-row gap-16 p-16">
      <div class="flex w-1/2 flex-col gap-8">
        <div class="flex flex-col gap-3">
          <div class="flex flex-row items-center gap-6">
            <h2>{project.title}.</h2>
            {#if project.isNew}
              <span
                class="bg-primary text-bg-main rounded-full px-2 py-1.5 text-[10px] leading-none font-semibold uppercase"
              >
                Just shipped
              </span>
            {/if}
          </div>
          <p class="text-muted text-sm">{project.description}</p>
        </div>

        <ul class="text-header flex flex-row gap-6 text-xs uppercase [&_a]:no-underline! [&_a]:hover:underline!">
          <li class="flex flex-row gap-3">
            <a href={getProjectLink(project.link, project.externalLink)} {...getLinkProps(project.externalLink)}>
              Visit site
            </a>
            <iconify-icon icon="ph:arrow-up-right-bold" class="size-4 text-sm"></iconify-icon>
          </li>
          {#if project.download}
            <li class="flex flex-row gap-3">
              <a href={project.download} target="_blank" rel="noopener noreferrer">Add to Chrome</a>
              <iconify-icon icon="ph:arrow-up-right-bold" class="size-4 text-sm"></iconify-icon>
            </li>
          {/if}
        </ul>
      </div>

      <div class="border-surface-border flex w-1/2 flex-col border-l">
        <img src={project.image} alt={project.title} class="h-full w-full object-cover" />
      </div>
    </div>
  {/each}
</div>

<style>
  @reference "@styles/main.css";
</style>
