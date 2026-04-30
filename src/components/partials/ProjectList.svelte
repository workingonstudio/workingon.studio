<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  type Project = {
    slug: string;
    title: string;
    description: string;
    link: string;
    externalLink: boolean;
    image: string;
    featured: boolean;
    publishedAt: string;
    download: string | null;
    body: string;
  };

  let { projects }: { projects: Project[] } = $props();

  function getProjectLink(link: string, externalLink: boolean) {
    if (externalLink) return link;
    return link === "/" ? link : `/projects/${link}`;
  }

  const latest = $derived(projects[0] ?? null);
  const featuredPool = $derived(projects.filter((p) => p.featured && p.slug !== latest?.slug));
  let featured: Project | null = $state(null);

  $effect(() => {
    featured = featuredPool.length > 0 ? featuredPool[Math.floor(Math.random() * featuredPool.length)] : null;
  });
</script>

{#snippet projectCard(project: Project)}
  <li class="project-item flex flex-col gap-8">
    <a
      href={getProjectLink(project.link, project.externalLink)}
      target={project.externalLink ? "_blank" : undefined}
      rel={project.externalLink ? "noopener noreferrer" : undefined}
    >
      <img
        src={project.image}
        alt=""
        class="border-surface-border w-full rounded-xl border transition-all duration-300"
      />
    </a>

    <div class="flex flex-col gap-3">
      <h3 class="text-2xl">{project.title}.</h3>
      <p class="text-muted text-sm">{project.description}</p>
    </div>

    <div class="flex flex-col gap-4 text-sm">
      {@html project.body}
    </div>

    <ul class="text-header flex flex-row gap-6 text-xs uppercase [&_a]:hover:underline!">
      <li class="flex flex-row gap-3">
        <a
          href={getProjectLink(project.link, project.externalLink)}
          target={project.externalLink ? "_blank" : undefined}
          rel={project.externalLink ? "noopener noreferrer" : undefined}
        >
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
  </li>
{/snippet}

<div class="divide-surface-border divide-y">
  {#if latest}
    <ContentPanel>
      <h2 class="text-xl font-medium">Latest project</h2>
      <ul class="stack">
        {@render projectCard(latest)}
      </ul>
    </ContentPanel>
  {/if}

  {#if featured}
    <ContentPanel>
      <h2 class="text-xl font-medium">Featured</h2>
      <ul class="stack">
        {@render projectCard(featured)}
      </ul>
    </ContentPanel>
  {/if}
</div>
