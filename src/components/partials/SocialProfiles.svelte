<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";
  import socialProfiles from "@data/socialProfiles.json";

  export let borderBottom: boolean = false;
  export let borderBottomDesktop: boolean = false;
</script>

<ContentPanel {borderBottom} {borderBottomDesktop}>
  <div class="flex flex-row items-center gap-3">
    <iconify-icon icon="ph:compass" class="size-5 text-xl text-zinc-500"></iconify-icon>
    <h2 class="font-medium">Elsewhere</h2>
  </div>
  <ul class="stack">
    {#each socialProfiles as { name, href, description }}
      <li class="flex flex-col gap-1">
        <a {href} class="text-header flex flex-row items-center gap-2 font-medium hover:underline">
          {name}
          <iconify-icon icon="ph:arrow-up-right-bold" class="size-4"></iconify-icon>
        </a>
        <p class="text-muted text-sm">{description}</p>
      </li>
    {/each}
  </ul>
</ContentPanel>
