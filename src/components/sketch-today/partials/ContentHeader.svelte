<script lang="ts">
  export let icon: string = "heroicons:bars-3-bottom-left";
  export let bgColor: string = "bg-emerald-100";
  export let header: string;
  export let subtitle: string;
</script>

<div class="flex flex-col items-start gap-3">
  <div class="flex flex-col items-start gap-4 md:flex-row md:items-center">
    <div class={`icon ${bgColor} flex rounded-lg p-1`}>
      <iconify-icon {icon} class="text-2xl text-gray-800"></iconify-icon>
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
