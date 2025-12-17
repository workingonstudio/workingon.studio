<script lang="ts">
  import Icon from "./Icon.svelte";
</script>

<div
  class="flex w-full flex-col items-center gap-24 md:grid md:w-5/6 md:grid-cols-2 md:gap-20 lg:w-full lg:grid-cols-3"
>
  <div class="feature">
    <Icon icon="manage-search-rounded" />
    <div class="flex flex-col gap-1">
      <h4>Search 1000's of icons.</h4>
      <p>Search from the most popular icon sets without leaving Sketch.</p>
    </div>
  </div>
  <div class="feature">
    <Icon icon="image-arrow-up-outline-rounded" />
    <div class="flex flex-col gap-1">
      <h4>Raw SVGs.</h4>
      <p>Unopinionated SVG insert. No unnecessary groups, or frames. That’s your role.</p>
    </div>
  </div>
  <div class="feature">
    <Icon icon="photo-size-select-small-rounded" />
    <div class="flex flex-col gap-1">
      <h4>Multiple size options.</h4>
      <p>Use the set sizes provided or customise to your requirements.</p>
    </div>
  </div>
  <div class="feature">
    <Icon icon="variable-insert-outline-rounded" />
    <div class="flex flex-col gap-1">
      <h4>Insert in place.</h4>
      <p>Select your layer/frame and insert the icon where you want it.</p>
    </div>
  </div>
  <div class="feature">
    <Icon icon="all-out-outline-rounded" />
    <div class="flex flex-col gap-1">
      <div class="flex flex-col items-center gap-2 md:flex-row">
        <span class="highlight">soon</span>
        <h4>Add as Symbol.</h4>
      </div>
      <p>Add icons as symbols, including prefixing and naming.</p>
    </div>
  </div>
  <div class="feature">
    <Icon icon="format-color-fill-rounded" />
    <div class="flex flex-col gap-1">
      <div class="flex flex-col items-center gap-2 md:flex-row">
        <span class="highlight">soon</span>
        <h4>Custom colors.</h4>
      </div>
      <p>Customise the color of your icons with the option to use variables.</p>
    </div>
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .feature {
    @apply flex w-80 flex-col items-center gap-6 text-center md:w-full md:items-start md:text-left;
    span {
      @apply flex items-center rounded-full px-2 py-0.5 text-[9px] text-blue-50 uppercase;
    }
  }
</style>
