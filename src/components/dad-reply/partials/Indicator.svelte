<script lang="ts">
  export let bgColor: string = "bg-blue-600";
</script>

<span class="relative h-1.5 w-1.5 rounded-full {bgColor}">
  <span class="absolute left-0 h-1.5 w-1.5 rounded-full {bgColor} motion-safe:animate-ping"></span>
</span>

<style>
</style>
