<script lang="ts">
  import { untrack } from "svelte";

  let { launchDate, initialDays }: { launchDate: string; initialDays: number } = $props();

  let days = $state(untrack(() => initialDays));

  $effect(() => {
    days = Math.floor((Date.now() - new Date(launchDate).getTime()) / (1000 * 60 * 60 * 24));
  });
</script>

{days}
