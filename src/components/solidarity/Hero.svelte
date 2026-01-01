<script lang="ts">
</script>

<section class="flex flex-col gap-12">
  <div class="flex flex-col justify-center gap-14 text-center">
    <h1>
      The open to work ring sucks.
      <br class="hidden md:flex" />
      Make everyone wear it.
    </h1>
    <p class="text-base md:text-xl">
      A LinkedIn extension that makes you feel <span class="underline">less shit</span>
      about looking for work.
    </p>
  </div>
  <div class="flex flex-row items-start justify-center gap-6">
    <a
      href="https://chromewebstore.google.com/detail/ahahliplongfboaikbajdedefpoifjeb"
      target="_blank"
      class="btn primary flex"
    >
      <span class="hidden md:flex">Add to Chrome</span>
      <span class="flex md:hidden">View on the Chrome Store</span>
    </a>
    <a href="#more" class="btn secondary">How it works</a>
  </div>
</section>

<style>
  @reference "@styles/solidarity.css";
  h1 {
    span {
      @apply underline;
    }
  }
  p {
    @apply font-medium;
  }
</style>
