<script>
  import Header from "./Header.svelte";
  import Hero from "./Hero.svelte";
  import ComingSoon from "./ComingSoon.svelte";
  import Quotes from "./Quotes.svelte";
</script>

<Header />
<main class="mx-auto flex max-w-[1156px] flex-col">
  <div class="space-y-60">
    <Hero />
    <Quotes />
    <ComingSoon />
  </div>
</main>
