<script lang="ts">
  import projectData from "@data/projects.json";
</script>

<section class="mt-16 max-w-md space-y-12">
  <ul class="mb-6 space-y-12">
    {#each projectData as { icon, name, description, version, status, tags, link }, index}
      {#if index <= 1}
        <li>
          <a href={link} class="space-y-4">
            <div class="space-y-3">
              <h2 class="flex flex-row items-center gap-2 text-base">
                <iconify-icon icon="carbon:{icon}" class="text-lg"></iconify-icon>
                {name}
              </h2>
              <p class="text-sm/5">
                {description}
              </p>
            </div>
            <ul class="meta">
              <li>
                <span class="indicator {status}"></span>
                {status}
              </li>
              <li>v{version.toFixed(1)}</li>
              {#each tags as tag}
                <li>{tag}</li>
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
  h2 {
    color: var(--color-text-primary);
  }
  p {
    color: var(--color-text-body);
  }
  .meta {
    @apply text-xxs flex flex-row space-x-2;
    li {
      @apply flex flex-row items-center rounded-full bg-gray-800 px-2 py-0.5 first:uppercase;
    }
  }
  .indicator {
    @apply text-xxs mr-2 inline-block h-1.5 w-1.5 rounded-full;
    &.live {
      @apply bg-emerald-500;
    }
    &.draft {
      @apply bg-amber-500;
    }
  }
</style>
