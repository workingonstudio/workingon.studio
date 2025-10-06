<script lang="ts">
  export let style: string = "solid";
  export let label: string = "";
  export let icon: boolean;
  export let iconRef: string = "";
  export let downloadLink: string = "/";
</script>

<a href={downloadLink} class="btn gap-2.5 {style}">
  {#if icon}
    <i class="fa-brands {'fa-' + iconRef} text-xl"></i>
  {/if}
  {label}
</a>

<style>
  @reference "@styles/dad-reply.css";
</style>
