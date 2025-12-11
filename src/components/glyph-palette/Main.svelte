<script lang="ts">
  import Hero from "./Hero.svelte";
  import Roadmap from "./Roadmap.svelte";
  import Features from "./Features.svelte";
  import Footer from "./Footer.svelte";
  import Timeline from "./Timeline.svelte";

  export let productChangelogs;
</script>

<div class="flex flex-col gap-36">
  <Hero />
  <Features />
  <Timeline />
  <!-- <Roadmap {productChangelogs} /> -->
  <Footer />
</div>

<style>
  @reference "@styles/glyph-palette.css";
</style>
