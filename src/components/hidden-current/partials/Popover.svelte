<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    header,
    body,
    allowAbsolute = false,
    children,
  }: {
    header: string;
    body: string;
    allowAbsolute?: boolean;
    children: Snippet;
  } = $props();
</script>

<div class={allowAbsolute ? "absolute right-6 lg:relative lg:right-0" : "relative"}>
  {@render children()}
  <div class="absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2">
    <div class="rounded-lg border border-neutral-200 bg-white p-4 shadow-lg">
      <h4 class="text-sm font-bold">{header}</h4>
      <p class="text-muted text-xs">{body}</p>
    </div>
    <span class="relative mx-auto mt-2 flex size-2">
      <span class="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
      <span class="bg-primary relative inline-flex size-2 rounded-full"></span>
    </span>
  </div>
</div>
