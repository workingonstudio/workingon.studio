<script lang="ts">
  import { DateTime } from "luxon";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;
</script>

<footer
  class="flex flex-col md:flex-row justify-between md:items-center text-gray-600 text-xs py-8"
>
  <span>workingonstudio ltd. no: 12345678</span>
  <span>{DateTime.fromISO(date).toFormat("EEE ff ZZZ")}</span>
</footer>

<style>
</style>
