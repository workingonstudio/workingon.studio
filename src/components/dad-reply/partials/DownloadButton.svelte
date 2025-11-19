<script lang="ts">
  export let style: string = "solid";
  export let label: string = "";
  export let icon: boolean;
  export let iconRef: string = "";
  export let downloadLink: string = "/";
  export let position: string = "header";
</script>

<a href={downloadLink} class="btn cursor-pointer gap-2.5 {style}" data-umami-event="clicked-install-{position}">
  {#if icon}
    <iconify-icon icon="fa7-brands:{iconRef}" class="text-xl"></iconify-icon>
  {/if}
  {label}
</a>

<style>
  @reference "@styles/dad-reply.css";
</style>
