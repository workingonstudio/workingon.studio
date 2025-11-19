<script>
  import Form from "./Form.svelte";
  import Icon from "./Icon.svelte";
  import Plugin from "./Plugin.svelte";
</script>

<div class="flex flex-row items-center justify-between">
  <div class="flex flex-col gap-16">
    <section class="flex w-full flex-col gap-12 lg:w-2xl">
      <div class="hero flex flex-col gap-6">
        <h1>
          A modern icon
          <br />
          plugin for Sketch.
        </h1>
        <p class="w-full text-xl lg:w-xl">
          Bring 100’s of modern icon sets directly to into your .sketch files, with full control over size, stroke, and
          color.
        </p>
      </div>
      <Form />
    </section>
  </div>
  <div class="flex w-full flex-row justify-end gap-12">
    <div class="pt-6">
      <Icon icon="verified" />
    </div>
    <Plugin />
  </div>
</div>

<style>
</style>
