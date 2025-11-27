<script lang="ts">
  export let iconSet: string = "material-symbols:";
  export let icon: string = "verified-outline-rounded";
</script>

<div class="icon">
  <span class="top-left"></span>
  <span class="top-right"></span>
  <iconify-icon icon={iconSet + icon} class="text-2xl"></iconify-icon>
  <span class="bottom-right"></span>
  <span class="bottom-left"></span>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .icon {
    @apply relative flex size-8 items-center justify-center border-1 border-dashed border-orange-300;
    span {
      @apply absolute size-1.5 bg-orange-400;
      &.top-left {
        @apply -top-1 -left-1;
      }
      &.top-right {
        @apply -top-1 -right-1;
      }
      &.bottom-right {
        @apply -right-1 -bottom-1;
      }
      &.bottom-left {
        @apply -bottom-1 -left-1;
      }
    }
  }
</style>
