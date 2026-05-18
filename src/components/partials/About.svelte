<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <p>
    Sixteen years. Five exits. I've been the founding designer, the head of UX, and the person teams call when something
    needs to actually ship.
  </p>
  <p>I don't just make the product better. I change how the people around me think about what's possible.</p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    if you spend more time shipping than you do talking about shipping.
  </p>
</ContentPanel>
