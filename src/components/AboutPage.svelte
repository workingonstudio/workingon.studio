<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import About from "./partials/About.svelte";
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    16 years building for the internet. I'm tired of the bullshit.
  </h1>
</PageHeader>

<section class="border-surface-border flex flex-1 border border-b-0">
  <div class="border-surface-border w-1/2 border-r">
    <About />
  </div>
</section>

<style>
  @reference "@styles/main.css";
</style>
