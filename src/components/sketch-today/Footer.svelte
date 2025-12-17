<script lang="ts">
</script>

<footer class="flex flex-col justify-between gap-3 text-[9px] md:flex-row md:gap-0">
  <a href="/">
    <img src="/sketch-today/logo-small-horizontal.svg" alt="wo.studio logo" />
  </a>
  <ul class="flex flex-row gap-3">
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:text-initial" class="size-3 text-xs"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="https://www.fontshare.com/fonts/montserrat">Montserrat</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:paintbrush" class="size-3 text-xs"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="https://sketch.com">Designed in Sketch</a>
      </div>
    </li>
    <li class="flex flex-row items-center gap-2">
      <iconify-icon icon="lucide:copyright" class="size-3 text-xs"></iconify-icon>
      <div class="flex flex-row gap-1">
        <a href="/">Copywrite 2025</a>
      </div>
    </li>
  </ul>
</footer>

<style>
  @reference "@styles/sketch-today.css";
  footer {
    @apply py-6;
  }
  ul {
    li {
      a {
        @apply uppercase;
        &:hover {
          @apply underline;
        }
      }
    }
  }
</style>
