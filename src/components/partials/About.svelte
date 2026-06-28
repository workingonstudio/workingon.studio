<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom}>
  <p>
    Fifteen years. Creative director. Brand, product, the lot. Give me a problem worth solving, and I'll run with it.
  </p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    I'm ready when you are.
  </p>
</ContentPanel>
