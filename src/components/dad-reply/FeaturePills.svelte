<script lang="ts">
  import Pill from "./partials/Pill.svelte";
</script>

<ul
  class="flex flex-row space-x-6 text-xs/6 font-semibold *:flex *:items-center *:rounded-full *:border *:border-slate-300 *:px-3 *:py-1 [&_span]:mr-2 [&_span]:!text-[18px] [&_span]:text-blue-600"
>
  <Pill icon="add_circle" text="Added directly in Gmail" />
  <Pill icon="web_traffic" text="Single click reply" />
  <Pill icon="flash_off" text="No AI by default" />
</ul>
