<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;  
</script>

<footer
  class="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center text-gray-600 text-[11px] py-8"
>
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16700615"
    class="hover:text-gray-00"
  >
    <span class="font-display">&#169;</span> workingonstudio ltd, no: 16700615
  </a>
  <span>last updated: {DateTime.fromISO(date).toFormat("ccc',' LL LLL y TT ZZZ")}</span>
</footer>
<!-- "ccc',' LL LLL y TT ZZZ" -->

<style>
</style>
