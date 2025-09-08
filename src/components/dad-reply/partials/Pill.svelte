<script lang="ts">
  import Icon from "@iconify/svelte";
  export let icon: string;
  export let text: string;
</script>

<li>
  <Icon icon="material-symbols:{icon}" class="mr-2 text-[18px] text-blue-600"></Icon>
  {text}
</li>

<style>
  @reference "@styles/dad-reply.css";
  li {
    @apply flex items-center rounded-full border border-slate-300 px-3 py-1;
  }
</style>
