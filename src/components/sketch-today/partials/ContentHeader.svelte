<script lang="ts">
  export let icon: string = "heroicons:bars-3-bottom-left";
  export let textColor: string = "text-emerald-500";
  export let header: string;
  export let subtitle: string;
</script>

<div class="flex flex-col items-start gap-3">
  <div class="flex flex-col items-start gap-4">
    <div class={`icon flex rounded-lg p-1`}>
      <iconify-icon {icon} class="text-2xl {textColor}"></iconify-icon>
    </div>
    <h1>{header}</h1>
  </div>
  <p class="text-body text-lg">{subtitle}</p>
</div>

<style>
  @reference "@styles/sketch-today.css";
  h1 {
    @apply text-header text-4xl capitalize;
  }
</style>
