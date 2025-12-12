<script>
  import Form from "./Form.svelte";
  import Plugin from "./Plugin.svelte";
</script>

<div class="mt-6 flex flex-col items-center justify-between gap-6 md:gap-4 lg:flex-row">
  <div class="flex flex-col gap-16">
    <section class="flex w-full flex-col gap-12 lg:w-2xl">
      <div class="hero flex flex-col gap-6">
        <h1>A modern icon plugin for Sketch.</h1>
        <p class="w-full text-xl lg:w-xl">
          Bring 100’s of modern icon* sets directly to into your .sketch files, with full control over size, stroke, and
          color.
        </p>
        <small>* it's just Material icons for now.</small>
      </div>
      <Form />
    </section>
  </div>
  <div class="flex w-full flex-row gap-12 md:order-none">
    <Plugin />
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  small {
    @apply text-sm text-gray-500;
  }
</style>
