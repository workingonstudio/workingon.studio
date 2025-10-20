<script lang="ts">
  export let type: string;
  export let title: string;
  export let description: string;
  export let iconSet: string = "heroicons";
  export let icon: string;
  export let bgColor: string;
  export let bgIconColor: string;
  export let borderColor: string;
  export let textColor: string;
</script>

<a href="/" class="flex flex-row items-center gap-3 rounded-lg border p-3 {type} {borderColor} {bgColor} {textColor}">
  <div class="icon flex rounded-sm {bgIconColor} p-1">
    <iconify-icon icon="{iconSet}:{icon}" class="text-gray-800"></iconify-icon>
  </div>
  <div class="flex flex-col gap-0.5">
    <h4 class="text-sm font-semibold">{title}</h4>
    <p class="text-xs">{description}</p>
  </div>
</a>

<style>
  @reference "@styles/sketch-today.css";
</style>
