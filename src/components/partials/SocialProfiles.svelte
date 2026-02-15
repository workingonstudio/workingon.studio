<script lang="ts">
  import socialProfiles from "@data/socialProfiles.json";
  export let containerClass = "";
</script>

<section class="content gap-6 {containerClass}">
  <h2 class="text-xl font-medium">Elsewhere</h2>
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
