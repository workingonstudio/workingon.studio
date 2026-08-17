<script lang="ts">
  import type { Snippet } from "svelte";
  let { extraStyles = "", children }: { extraStyles?: string; children?: Snippet } = $props();
</script>

<section class="flex flex-col gap-8 {extraStyles}">
  {@render children?.()}
</section>
