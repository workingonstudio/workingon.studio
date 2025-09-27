<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;
</script>

<footer
  class="text-xxs flex flex-col items-start space-y-2 py-8 text-center md:flex-row md:justify-between md:space-y-0 md:text-left"
>
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16700615"
    class="flex flex-row items-center justify-center gap-1 transition-all delay-100 hover:text-gray-100 md:justify-normal"
  >
    <iconify-icon icon="material-symbols:copyright-outline-rounded" class="text-sm"></iconify-icon>
    <span>workingonstudio ltd, no: 16700615</span>
  </a>
  <span>
    last updated: {DateTime.fromISO(date).toFormat("ccc',' dd LLL y TT ZZZ")}
  </span>
</footer>

<style>
  @reference "@styles/global.css";
  footer {
    color: var(--color-text-muted);
  }
</style>
