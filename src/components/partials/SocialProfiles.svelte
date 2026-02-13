<script lang="ts">
  import socialProfiles from "@data/socialProfiles.json";
</script>

<section class="flex flex-col gap-6 px-8 py-9 lg:px-16 lg:py-18">
  <h3 class="text-xl font-medium">Elsewhere</h3>
  <ul class="flex flex-col gap-5">
    {#each socialProfiles as { name, href, description }}
      <li class="flex flex-col gap-1">
        <a {href} class="text-header flex flex-row items-center gap-2 font-medium hover:underline">
          {name}
          <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
        </a>
        <p class="text-muted text-sm">{description}</p>
      </li>
    {/each}
  </ul>
</section>
