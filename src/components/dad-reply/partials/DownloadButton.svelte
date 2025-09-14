<script lang="ts">
  export let style: string = "solid";
  export let label: string = "";
  export let icon: boolean;
  export let iconRef: string = "";
  export let downloadLink: string = "/";
</script>

<a href={downloadLink} class="btn {style}">
  {#if icon}
    <i class="fa-brands {'fa-' + iconRef} mr-2.5 text-xl"></i>
  {/if}
  {label}
</a>

<style>
  @reference "@styles/dad-reply.css";
  .btn {
    @apply flex justify-center rounded-lg border-2 border-transparent p-3 pr-4;
    @apply text-sm font-semibold;
    @apply transition-colors duration-300 ease-in-out;
    &.solid {
      background: var(--color-primary);
      @apply text-white hover:bg-blue-700;
    }
    &.hollow {
      color: var(--color-primary);
      border-color: var(--color-primary);
      @apply bg-white;
    }
  }
</style>
