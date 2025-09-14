<script lang="ts">
  import { DateTime } from "luxon";
  import Icon from "@components/Icon.svelte";
  import timelineData from "../../data/timeline-github.json";
  let date = timelineData.generated;
</script>

<footer class="text-xxs flex flex-col space-y-2 py-8 md:flex-row md:items-center md:justify-between">
  <a
    href="https://find-and-update.company-information.service.gov.uk/company/16700615"
    class="flex flex-row items-center space-x-1 transition-all delay-100 hover:text-gray-100"
  >
    <Icon name="copywrite" class_="flex items-center" />
    <span>workingonstudio ltd, no: 16700615</span>
  </a>
  <span>last updated: {DateTime.fromISO(date).toFormat("ccc',' dd LLL y TT ZZZ")}</span>
</footer>

<style>
  @reference "@styles/global.css";
  footer {
    color: var(--color-text-muted);
  }
</style>
