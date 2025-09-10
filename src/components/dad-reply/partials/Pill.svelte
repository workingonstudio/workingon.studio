<script lang="ts">
  import Icon from "@components/Icon.svelte";
  export let icon: string;
  export let text: string;
</script>

<li>
  <Icon name={icon} class_="mr-2 text-lg text-blue-600" />
  {text}
</li>

<style>
  @reference "@styles/dad-reply.css";
  li {
    color: var(--color-text-body);
    @apply flex items-center rounded-full border border-slate-300 px-3 py-1;
  }
</style>
