<script lang="ts">
  import Header from "./Header.svelte";
  import Form from "./Form.svelte";
  import Changelog from "./Changelog.svelte";

  export let changelogData;
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
  <Changelog {changelogData} />
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .hero {
    p {
      @apply w-full text-xl lg:w-xl;
    }
  }
</style>
