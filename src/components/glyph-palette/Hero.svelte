<script>
  import Form from "./Form.svelte";
  import Icon from "./Icon.svelte";
  import Plugin from "./Plugin.svelte";
</script>

<div class="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
  <div class="flex flex-col gap-16">
    <section class="flex w-full flex-col gap-12 lg:w-2xl">
      <div class="hero flex flex-col gap-6">
        <h1>
          A modern icon
          <br />
          plugin for Sketch.
        </h1>
        <p class="w-full text-xl lg:w-xl">
          Bring 100’s of modern icon* sets directly to into your .sketch files, with full control over size, stroke, and
          color.
        </p>
        <small>* it's just Material icons for now. And a vary limited set at that. Hey I am only one man.</small>
      </div>
      <Form />
    </section>
  </div>
  <div class="flex w-full flex-row justify-end gap-12 md:order-none">
    <div class="hidden pt-6 md:inline">
      <Icon icon="verified-outline" />
    </div>
    <Plugin />
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  small {
    @apply text-sm text-gray-500;
  }
</style>
