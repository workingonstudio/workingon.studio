<script lang="ts">
  import Hero from "./Hero.svelte";
  import Features from "./Features.svelte";
  import Footer from "./Footer.svelte";
  import Roadmap from "./Roadmap.svelte";

  export let productChangelogs;
</script>

<Hero />
<Features />
<Roadmap />

<style>
  @reference "@styles/glyph-palette.css";
</style>
