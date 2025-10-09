<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import ComingSoon from "./ComingSoon.svelte";
  import Quotes from "./Quotes.svelte";
  import Pricing from "./Pricing.svelte";
  import EarlyBird from "./EarlyBird.svelte";
  import Footer from "./Footer.svelte";
  import Banner from "./partials/Banner.svelte";
</script>

<Banner />
<Header />
<main class="mx-auto flex max-w-full flex-col px-4 md:max-w-6xl md:pt-0">
  <div class="space-y-30 md:space-y-60">
    <Hero />
    <ComingSoon />
    <Quotes />
    <Pricing />
    <EarlyBird />
    <Footer />
  </div>
</main>
