<script>
  import Form from "./Form.svelte";
  import Plugin from "./Plugin.svelte";
</script>

<div class="my-6 flex flex-col items-center justify-between gap-6 md:my-12 md:gap-12 lg:flex-row">
  <div class="flex flex-col gap-16">
    <section class="flex w-full flex-col items-center gap-12 lg:w-2xl lg:items-start">
      <div class="hero flex flex-col gap-6 text-center md:w-2/3 lg:w-full lg:text-left">
        <h1>A modern icon plugin for Sketch.</h1>
        <p class="w-full text-xl lg:w-xl">
          Bring 100’s of modern icon* sets directly to into your .sketch files, with full control over size, stroke, and
          color.
        </p>
        <small>* it's just Material icons for now.</small>
      </div>
      <div class="hidden lg:flex">
        <Form emailId="desktop" />
      </div>
    </section>
  </div>
  <div class="flex flex-row gap-12">
    <Plugin />
  </div>
  <div class="flex lg:hidden">
    <Form emailId="mobile" />
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  small {
    @apply text-sm text-gray-500;
  }
</style>
