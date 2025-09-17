<script lang="ts">
  import Pill from "./partials/Pill.svelte";
</script>

<ul class="flex flex-col md:flex-row">
  <Pill icon="material-symbols:add-circle-outline" text="Added directly in Gmail" />
  <Pill icon="material-symbols:web-traffic-rounded" text="Single click reply" />
  <Pill icon="material-symbols:flash-off-outline-rounded" text="No AI by design" />
</ul>

<style>
  @reference "@styles/dad-reply.css";
  ul {
    @apply space-x-6 text-xs/6 font-semibold;
  }
</style>
