<script lang="ts">
  let { header, body }: { header: string; body: string } = $props();
</script>

<div class="relative">
  <slot />
  <div class="absolute bottom-full left-1/2 z-10 mb-2 w-max -translate-x-1/2">
    <div class="rounded-lg border border-neutral-200 bg-white p-4 shadow-lg">
      <h4 class="text-sm font-bold">{header}</h4>
      <p class="text-muted text-xs">{body}</p>
    </div>
    <span class="relative mx-auto mt-2 flex size-2">
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75"></span>
      <span class="bg-primary relative inline-flex size-2 rounded-full"></span>
    </span>
  </div>
</div>
