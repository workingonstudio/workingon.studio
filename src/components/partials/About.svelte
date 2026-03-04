<script lang="ts">
  import ContentPanel from "./ContentPanel.svelte";

  export let borderBottom: boolean = false;
  export let borderRight: boolean = false;
</script>

<ContentPanel {borderBottom} {borderRight}>
  <p>
    16 years shipping products. I've designed systems for millions of users and been part of 5 exits. I've worked across
    AI, marketing, finance, SaaS, just not gambling. Never gambling.
  </p>
  <p>
    I design and build. I understand constraints, move fast, and don't need managing. I work best with teams that ship,
    not teams that meet about shipping.
  </p>
</ContentPanel>
