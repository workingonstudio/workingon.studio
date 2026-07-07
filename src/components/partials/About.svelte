<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
</script>

<ContentPanel {borderBottom}>
  <p>
    Fifteen years. Creative director. Brand, product, the lot. I work directly with founders and their teams. Not as a
    pair of hands. As a guide. Someone who's been at the early stages enough times to know what matters, what doesn't,
    and when to move.
  </p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    I'm ready when you are.
  </p>
</ContentPanel>
