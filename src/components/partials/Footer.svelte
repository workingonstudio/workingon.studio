<script lang="ts">
  import timelineData from "../../data/timeline-github.json";
  let formattedDate = timelineData.entries.slice(-1).pop()?.formattedDate;
</script>

<footer
  class="flex flex-row justify-between items-center text-gray-600 text-xs p-8"
>
  <span>workingonstudio ltd, no: 12345678</span>
  <span>{formattedDate}</span>
</footer>

<style>
</style>
