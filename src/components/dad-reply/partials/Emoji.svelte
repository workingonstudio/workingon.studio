<script lang="ts">
  import { selectedTone, applyTone } from "@stores/dadreply/toneStore";

  export let emoji: string = "👍";
  export let class_: string = "";

  $: tonedEmoji = applyTone(emoji, $selectedTone);
</script>

<span class={class_}>{tonedEmoji}</span>
