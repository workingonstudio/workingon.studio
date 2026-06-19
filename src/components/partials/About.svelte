<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <p>
    Fifteen years. Creative director. I figure out what the whole thing should be, then I build it. I don't need
    managing. I need a problem.
  </p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    if you're actually building something.
  </p>
</ContentPanel>
