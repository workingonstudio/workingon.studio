<script lang="ts">
  let statsOpen = $state<boolean>(false);

  let stats = [
    {
      title: "today",
      energy: "4.956 Wh",
      water: "9.42 L",
    },
    {
      title: "this week",
      energy: "24.266 Wh",
      water: "46.11 L",
    },
    {
      title: "all time",
      energy: "65.363 Wh",
      water: "124.19 L",
    },
  ];

  function openStats() {
    statsOpen = !statsOpen;
  }
</script>

<button type="button" class="relative flex w-full flex-col items-end justify-start gap-2">
  <ul class="bg-primary flex flex-row gap-3 rounded-xl px-4 py-3 pr-4.5 font-bold text-neutral-400">
    <li class="text-xxs flex flex-row items-center gap-2 whitespace-nowrap text-neutral-100">
      <iconify-icon icon="material-symbols:bolt-outline" class="text-muted size-4 text-base"></iconify-icon>
      4.956 Wh
    </li>
    <li class="text-xxs flex flex-row items-center gap-2 whitespace-nowrap text-neutral-100">
      <iconify-icon icon="material-symbols:water-drop-outline" class="text-muted size-4 text-base"></iconify-icon>
      9.42 L
    </li>
  </ul>
  {#if statsOpen}
    <div class="bg-primary flex w-50 flex-col gap-3 rounded-xl p-4">
      {#each stats as { title, energy, water }}
        <div class="text-xxs flex flex-col items-start gap-1">
          <strong class="text-neutral-500 uppercase">{title}</strong>
          <ul class="flex w-full flex-col gap-1">
            <li class="flex flex-row items-center justify-between text-neutral-400">
              <span class="text-neutral-400">Energy</span>
              <span class="text-neutral-200">{energy}</span>
            </li>
            <li class="flex flex-row items-center justify-between text-neutral-400">
              <span class="text-neutral-400">Water</span>
              <span class="text-neutral-200">{water}</span>
            </li>
          </ul>
        </div>
      {/each}
    </div>
  {/if}
</button>
