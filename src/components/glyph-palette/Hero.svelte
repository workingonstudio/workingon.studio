<script>
  import Plugin from "./Plugin.svelte";
  import Icon from "./Icon.svelte";
</script>

<div class="my-6 flex flex-col items-center justify-between gap-6 md:my-12 md:gap-12 lg:flex-row">
  <div class="flex flex-col gap-16">
    <section class="flex w-full flex-col items-center gap-12 lg:w-2xl lg:items-start">
      <div class="hero flex flex-col gap-6 text-center md:w-2/3 lg:w-full lg:text-left">
        <Icon icon="diamond-outline" />
        <h1>A modern icon plugin for Sketch.</h1>
        <p class="w-full text-xl lg:w-xl">
          Bring 100’s of modern icon* sets directly to into your .sketch files, with full control over size, stroke, and
          color.
        </p>
        <small>* currently supporting Material, Lucide, Hero, and Carbon.</small>
      </div>
      <div class="flex flex-row gap-6">
        <a
          href="/glyph-palette/downloads/glyph-palette-v1.1.1.sketchplugin.zip"
          download
          class="highlight flex flex-row items-center gap-3 px-4 py-3 text-sm hover:bg-blue-700"
        >
          <iconify-icon icon="material-symbols:download-rounded" class="size-5 text-xl"></iconify-icon>
          Download v1.1.1
        </a>
        <a
          href="/projects/glyph-palette/change-log"
          class="flex flex-row items-center gap-3 rounded-xl px-4 py-3 text-sm hover:underline"
        >
          Changelog
        </a>
      </div>
    </section>
  </div>
  <div class="flex flex-row gap-12">
    <Plugin />
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  small {
    @apply text-sm text-gray-500;
  }
  .default {
    &:hover {
      @apply border-transparent bg-transparent inset-ring-transparent;
    }
  }
</style>
