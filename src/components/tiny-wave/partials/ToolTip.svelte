<script lang="ts">
  import { Tooltip } from "melt/builders";

  let { children, content } = $props();

  const tooltip = new Tooltip({
    openDelay: 100,
    closeDelay: 100,
    floatingConfig: {
      computePosition: {
        placement: "top",
      },
    },
  });
</script>

<button {...tooltip.trigger}>
  {@render children()}
</button>
<div class="tooltip" {...tooltip.content}>
  <p>{content}</p>
</div>
