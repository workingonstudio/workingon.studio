<script lang="ts">
  import { recorder, type WaveStyle, type WavePathCommand } from "@stores/tiny-wave/recorder.svelte";
  import ToolTip from "./ToolTip.svelte";

  const presets: {
    label: string;
    icon: string;
    style: WaveStyle;
    samples?: number;
    paths: WavePathCommand[] | undefined;
  }[] = [
    {
      label: "Sine",
      icon: "ph:wave-sine-bold",
      style: "steps",
      samples: undefined,
      paths: undefined,
    },
    {
      label: "Bar",
      icon: "ph:waveform-bold",
      style: "mirror",
      samples: 100,
      paths: [{ d: "V", sy: 0, x: 50, ey: 100 }],
    },
    {
      label: "Square",
      icon: "ph:wave-square-bold",
      style: "steps",
      samples: undefined,
      paths: [
        { d: "V", sy: 0, x: 0, ey: 100 },
        { d: "H", sx: 0, y: 100, ex: 100 },
        { d: "V", sy: 0, x: 100, ey: 100 },
      ],
    },
  ];
</script>

<div class="flex flex-row justify-center gap-3">
  {#each presets as { label, paths, icon, style, samples }}
    <ToolTip content={label}>
      <button
        type="button"
        onclick={() => {
          recorder.setWaveStyle(style);
          recorder.setWavePaths(paths, label, samples);
        }}
        class="btn flex size-8 items-center justify-center
        {recorder.wavePathName === label ? 'text-primary opacity-100' : 'hover:text-body opacity-50'}"
      >
        <iconify-icon {icon} class="text-base"></iconify-icon>
      </button>
    </ToolTip>
  {/each}
</div>
