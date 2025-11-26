<script lang="ts">
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import Roadmap from "./Roadmap.svelte";
  import Features from "./Features.svelte";
  import Footer from "./Footer.svelte";

  export let productChangelogs;
</script>

<Header />
<div class="flex flex-col gap-36">
  <Hero />
  <Features />
  <Roadmap {productChangelogs} />
  <Footer />
</div>

<style>
  @reference "@styles/glyph-palette.css";
</style>
