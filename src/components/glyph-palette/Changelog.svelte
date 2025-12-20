<script lang="ts">
  import Icon from "./Icon.svelte";

  export let productChangelogs;
</script>

<section class="flex flex-row">
  <div class="flex flex-col gap-6">
    <Icon icon="update-rounded" />
    <h1>Changelog</h1>
    <p class="text-xl">All updates.</p>
  </div>
</section>

<style>
  @reference "@styles/glyph-palette.css";
</style>
