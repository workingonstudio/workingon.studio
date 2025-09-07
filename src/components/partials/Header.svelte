<script lang="ts">
  import timelineData from "../../data/timeline-github.json";
  export let text: string;
  let headerText: string;
  let dotText: string;
  let currentVersion = timelineData.entries.slice(-1).pop()?.version;

  function grabHeader(text: string) {
    let stringLength = text.length;
    headerText = text.slice(0, text.indexOf("."));
    dotText = text.slice(text.indexOf("."), stringLength);
  }

  grabHeader(text);
</script>

<header
  class="flex flex-row justify-between items-center group p-8 bg-gray-950/80 backdrop-blur-sm"
>
  <a
    href="/"
    class="cursor-pointer"
  >
    <h1 class="text-base font-display inline-block">
      {headerText}<span
        class="text-xs text-yellow-300 text-shadow-glow motion-safe:animate-flicker sm:text-gray-500 sm:text-shadow-none sm:motion-safe:animate-none sm:group-hover:text-shadow-glow sm:group-hover:text-yellow-300 sm:group-hover:motion-safe:animate-flicker"
        >{dotText}</span
      >
    </h1>
  </a>
  <nav class="text-gray-600 text-xs">
    <ul>
      <li><a href="/progress">{currentVersion}</a></li>
    </ul>
  </nav>
</header>

<style>
  @reference "../../styles/global.css";
  nav a {
    @apply hover:text-gray-100 hover:underline;
  }
</style>
