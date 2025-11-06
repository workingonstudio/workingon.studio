<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import How from "./How.svelte";
  import Quotes from "./Quotes.svelte";
  import Pricing from "./Pricing.svelte";
  import EarlyBird from "./EarlyBird.svelte";
  import Footer from "./Footer.svelte";
  import Banner from "./partials/Banner.svelte";
  import Pro from "./Pro.svelte";
  import AlertBanner from "./partials/AlertBanner.svelte";
</script>

<AlertBanner />
<!-- <Banner /> -->
<Header />
<main class="mx-auto flex max-w-full flex-col px-4 md:max-w-6xl md:pt-0">
  <Hero />
  <div class="*:pt-30 *:pb-10">
    <How />
    <Pro />
    <Pricing />
    <EarlyBird />
    <Quotes />
    <Footer />
  </div>
</main>
