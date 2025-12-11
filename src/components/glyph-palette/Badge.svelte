<script lang="ts">
  export let label: string;
  export let type: string = "";
</script>

<span class="badge {type}">{label}</span>

<style>
  @reference "@styles/glyph-palette.css";
  .badge {
    @apply rounded-full px-2 py-0.5 text-[10px] font-bold uppercase;
  }
</style>
