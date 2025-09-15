<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import ComingSoon from "./ComingSoon.svelte";
  import Quotes from "./Quotes.svelte";
  import Pricing from "./Pricing.svelte";
  import EarlyBird from "./EarlyBird.svelte";
  import Footer from "./Footer.svelte";
</script>

<Header />
<main class="mx-auto flex max-w-100 flex-col px-4 pt-72 md:max-w-6xl md:px-0 md:pt-0">
  <div class="space-y-60">
    <Hero />
    <Quotes />
    <!-- <ComingSoon /> -->
    <Pricing />
    <EarlyBird />
    <Footer />
  </div>
</main>
