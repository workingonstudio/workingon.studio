<script lang="ts">
</script>

<div class="flex flex-col gap-8">
  <div class="flex flex-col gap-4">
    <h1>
      <iconify-icon
        icon="material-symbols:change-history-outline-sharp"
        class="group-spin-drop text-2xl"
      ></iconify-icon>
      Temporary outage (503)
    </h1>
    <p>
      <span class="font-semibold">The Figma server is down for maintenance.</span>
    </p>
    <p class="text-text-muted!">Figma will automatically try to reconnect.</p>
  </div>
  <div class="flex flex-col gap-8">
    <div class="flex flex-row gap-4">
      <a href="https://www.sketch.com?ref=workingon.studio" class="btn flex flex-row items-center gap-3">
        <iconify-icon
          icon="material-symbols:diamond-outline-rounded"
          class="group-spin-drop relative top-[1px] text-base text-amber-400"
        ></iconify-icon>
        Try Sketch
      </a>
      <a href="https://penpot.app?ref=workingon.studio" class="btn flex flex-row items-center gap-3">
        <iconify-icon
          icon="material-symbols:design-services-outline-rounded"
          class="group-spin-drop relative top-[1px] text-base text-emerald-400"
        ></iconify-icon>
        Try Penpot
      </a>
    </div>
    <small>* you could always run Coral Draw through a VM?</small>
  </div>
</div>

<style>
  @reference "@styles/is-figma-down.css";
  .btn {
    @apply rounded-lg border border-slate-600 px-3.5 py-2.5 text-xs font-semibold no-underline transition-all duration-300 hover:scale-110;
  }
  a {
    @apply underline hover:no-underline;
  }
  p {
    @apply text-slate-300;
  }
</style>
