<script lang="ts">
  import PageHeader from "./partials/PageHeader.svelte";
  import projectData from "@data/projects.json";
  import { DateTime } from "luxon";
  const launchDate = DateTime.fromISO("2025-08-27");
  const daysSince = Math.floor(DateTime.now().diff(launchDate, "days").days);
</script>

<PageHeader>
  <h1>
    {daysSince} days passed. 3 projects shipped.
    <br />
    3 more in the dock.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>I don’t make things for you. I make them for me and share them.</p>
  </div>
</PageHeader>

<section class="mx-2 max-w-2xl">
  <ul class="project-list mb-10 flex flex-col gap-12">
    {#each projectData as { name, description, version, status, tags, link }, index}
      {#if index <= 2}
        <li class="project-item">
          <a href={link} class="space-y-4">
            <div class="content space-y-3">
              <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
                <span class="h-8 w-8">
                  <iconify-icon icon="carbon:arrow-up-right" class="text-3xl text-gray-500"></iconify-icon>
                </span>
                <h2 class="flex flex-row items-center gap-2">{name}</h2>
              </div>
              <p class="lg:ml-14">
                {description}
              </p>
            </div>
            <ul class="meta flex flex-row gap-6">
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
</section>

<style>
  @reference "@styles/global.css";
  .meta {
    @apply text-sm uppercase lg:ml-14;
  }
  .project-list:hover .project-item:not(:hover) {
    @apply opacity-20 transition-opacity delay-100 duration-300 ease-in-out;
  }

  .project-item {
    @apply transition-opacity delay-100 duration-300 ease-in-out;
  }
</style>
