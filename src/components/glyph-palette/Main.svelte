<script lang="ts">
  import Hero from "./Hero.svelte";
  import Features from "./Features.svelte";
  import Footer from "./Footer.svelte";
  import Roadmap from "./Roadmap.svelte";

  export let productChangelogs;
</script>

<div class="flex flex-col gap-36">
  <Hero />
  <div class="flex flex-col items-center">
    <Features />
  </div>
  <Roadmap />
  <Footer />
</div>

<style>
  @reference "@styles/glyph-palette.css";
</style>
