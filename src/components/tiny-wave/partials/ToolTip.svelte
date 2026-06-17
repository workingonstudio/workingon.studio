<script lang="ts">
  import { Tooltip } from "melt/builders";

  let {
    children,
    content,
    open,
    closeOnPointerDown,
  }: {
    children: any;
    content: string;
    open?: () => boolean;
    closeOnPointerDown?: boolean;
  } = $props();

  let tooltip: Tooltip | undefined = $state();

  $effect(() => {
    tooltip = new Tooltip({
      openDelay: 100,
      closeDelay: 100,
      floatingConfig: {
        computePosition: { placement: "top" },
      },
      ...(open ? { open } : {}),
      ...(closeOnPointerDown !== undefined ? { closeOnPointerDown } : {}),
    });
  });
</script>

{#if tooltip}
  <span {...tooltip.trigger}>
    {@render children()}
  </span>
  <div class="tooltip" {...tooltip.content}>
    <p>{content}</p>
  </div>
{/if}
