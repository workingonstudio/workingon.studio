<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <p>
    Fifteen years. Creative director. I work out what something should be, then build it. Give me a problem worth
    solving, and I'll run with it.
  </p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    if you're building something good.
  </p>
</ContentPanel>
