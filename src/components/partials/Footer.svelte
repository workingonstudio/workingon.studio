<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;
</script>

<footer
  class="text-xxs flex flex-col items-center space-y-2 py-8 text-center sm:items-start md:flex-row md:justify-between md:space-y-0 md:text-left"
>
  <a href="https://github.com/workingonstudio/workingon.studio">
    last updated: {DateTime.fromISO(date).toFormat("ccc',' dd LLL y TT ZZZ")}
  </a>
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16700615"
    class="order-last flex flex-row items-center justify-center gap-1 md:order-first md:justify-normal"
  >
    <iconify-icon icon="material-symbols:copyright-outline-rounded" class="text-sm"></iconify-icon>
    <span>workingonstudio ltd, no: 16700615</span>
  </a>
</footer>

<style>
  @reference "@styles/global.css";
  footer {
    @apply text-muted;
    a {
      @apply transition-all delay-100 hover:text-gray-100;
    }
  }
</style>
