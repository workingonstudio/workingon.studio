<script lang="ts">
  import Icon from "./Icon.svelte";
</script>

<div class="flex flex-row gap-6">
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
    <Icon icon="all-out-outline-rounded" />
    <div class="flex flex-col gap-1">
      <div class="flex flex-row items-center gap-2">
        <span>soon</span>
        <h4>Insert as Symbol.</h4>
      </div>
      <p>Add to your design library with the symbol insert option, including prefixing and naming.</p>
    </div>
  </div>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .feature {
    @apply flex w-1/3 flex-col gap-6;
    span {
      @apply flex items-center rounded-full bg-orange-300 px-2 py-0.5 text-[9px] uppercase;
    }
  }
</style>
