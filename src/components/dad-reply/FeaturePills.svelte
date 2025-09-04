<script lang="ts">
  import Pill from "./partials/Pill.svelte";
</script>

<ul
  class="flex flex-row font-semibold text-xs/6 space-x-6 *:flex *:items-center *:border *:rounded-full *:border-slate-300 *:py-1 *:px-3 [&_span]:!text-[18px] [&_span]:mr-2 [&_span]:text-blue-600"
>
  <Pill
    icon="add_circle"
    text="Added directly in Gmail"
  />
  <Pill
    icon="web_traffic"
    text="Single click reply"
  />
  <Pill
    icon="flash_off"
    text="Not powered by AI"
  />
</ul>
