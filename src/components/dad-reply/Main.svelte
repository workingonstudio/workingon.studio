<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import ComingSoon from "./ComingSoon.svelte";
  import Quotes from "./Quotes.svelte";
  import Pricing from "./Pricing.svelte";
  import EarlyBird from "./EarlyBird.svelte";
  import ShareModule from "./partials/ShareModule.svelte";
</script>

<Header />
<main class="mx-auto flex max-w-6xl flex-col">
  <div class="space-y-60">
    <Hero />
    <Quotes />
    <ComingSoon />
    <Pricing />
    <ShareModule />
    <EarlyBird />
  </div>
</main>
