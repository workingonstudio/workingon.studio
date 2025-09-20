<script lang="ts">
  export let icon: string;
  export let text: string;
</script>

<li class="gap-2">
  <iconify-icon {icon} class="text-lg"></iconify-icon>
  {text}
</li>

<style>
  @reference "@styles/dad-reply.css";
  li {
    color: var(--color-text-body);
    @apply inline-flex items-center rounded-full border border-slate-300 px-3 py-1 md:flex;
  }
</style>
