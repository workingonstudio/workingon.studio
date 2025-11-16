<script lang="ts">
  import Header from "./Header.svelte";
  import Form from "./Form.svelte";
  import Badge from "./Badge.svelte";
</script>

<Header />
<div class="flex flex-col gap-16">
  <section class="flex w-full flex-col gap-12 lg:w-2xl">
    <div class="hero flex flex-col gap-6">
      <h1>
        A modern icon
        <br />
        plugin for Sketch.
      </h1>
      <p>
        Bring 100’s of modern icon sets directly to into your .sketch files, with full control over size, stroke, and
        color.
      </p>
    </div>
    <Form />
  </section>
  <section class="progress flex flex-col gap-12">
    <div class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon icon="material-symbols:deployed-code-update-outline-rounded" class="text-2xl"></iconify-icon>
        <h4>Current release</h4>
        <Badge label="v0.5" />
      </div>
      <ul>
        <li>support for Material icons (regular, 24 x 24).</li>
        <li>insert as symbol.</li>
        <li>send to symbol page.</li>
        <li>prefix symbol name.</li>
      </ul>
    </div>
    <div class="flex flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon icon="material-symbols:arrow-right-alt-rounded" class="text-2xl"></iconify-icon>
        <h4>Next release</h4>
        <Badge label="v0.8" />
      </div>
      <ul>
        <li>support for full Material icons.</li>
        <li>choose colors.</li>
        <li>category separation.</li>
        <li>fixed sizes (16 x 16, 24 x 24).</li>
      </ul>
    </div>
  </section>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .hero {
    p {
      @apply w-full text-xl lg:w-xl;
    }
  }
  .progress {
    ul {
      li {
        @apply text-text-body before:mr-2 before:content-['─'];
      }
    }
  }
</style>
