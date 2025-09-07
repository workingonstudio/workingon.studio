<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;
</script>

<footer
  class="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center text-gray-600 text-xs py-8"
>
  <span
    >last updated: {DateTime.fromISO(date).toFormat(
      "ccc',' LL LLL y TT ZZZ"
    )}</span
  >
</footer>

<style>
</style>
