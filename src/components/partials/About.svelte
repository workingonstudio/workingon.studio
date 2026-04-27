<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <p>I've worked across AI, marketing, finance, and SaaS. Just not gambling. Never gambling.</p>
  <p>
    My best ideas don't come from a screen. They come from being out in the world I'm designing for. I like optional
    meeting invites.
  </p>
  <p>
    <a href="/contact" class="underline hover:no-underline">Get in touch</a>
    if you spend more time shipping than you do talking about shipping.
  </p>
</ContentPanel>
