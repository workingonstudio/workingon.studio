<script lang="ts">
  import timelineData from "../../data/timeline-github.json";
  let date = new Date(timelineData.generated);
</script>

<footer
  class="flex flex-row justify-between items-center text-gray-600 text-xs py-8"
>
  <span>workingonstudio ltd, no: 12345678</span>
  <span>{date.toUTCString()}</span>
</footer>

<style>
</style>
