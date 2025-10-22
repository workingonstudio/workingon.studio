<script lang="ts">
</script>

<div class="flex flex-col gap-6">
  <div class="flex flex-col gap-4">
    <h1>
      <iconify-icon
        icon="material-symbols:change-history-outline-sharp"
        class="group-spin-drop text-2xl"
      ></iconify-icon>
      Temporary outage (503)
    </h1>
    <p>
      The <span class="font-semibold blur-[4px]">Fijma</span>
      server is down for maintenance.
    </p>
    <p>
      <span class="font-semibold blur-[4px]">Fijma</span>
      will automatically try to reconnect.
    </p>
  </div>
  <div class="flex flex-row gap-3">
    <a href="https://www.sketch.com?ref=workingon.studio" class="btn flex flex-row items-center gap-3">
      <iconify-icon
        icon="material-symbols:diamond-outline-rounded"
        class="group-spin-drop text-lg text-amber-400"
      ></iconify-icon>
      Try Sketch
    </a>
    <span class="btn scale-none! cursor-default border border-transparent!">Just wait longer</span>
  </div>
  <small>
    For help: Visit <a href="">sketch.com</a>
    or contact
    <a href="mailto:support@sketch.com">support@sketch.com</a>
  </small>
</div>

<style>
  @reference "@styles/is-figma-down.css";
  .btn {
    @apply rounded-lg border border-slate-600 px-4 py-3 text-xs font-semibold no-underline transition-all duration-300 hover:scale-110;
  }
  a {
    @apply underline hover:no-underline;
  }
  p {
    @apply text-slate-300;
  }
</style>
