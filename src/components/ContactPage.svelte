<script lang="ts">
  import { onMount } from "svelte";

  let { baseRate = 400 }: { baseRate?: number } = $props();

  let displayRate = $state(baseRate);
  let timeInterval: ReturnType<typeof setInterval> | null = null;
  let pageLoadTime = 0;

  function startTimeBasedIncrement(rate: number) {
    pageLoadTime = Date.now();
    timeInterval = setInterval(() => {
      const elapsedSeconds = (Date.now() - pageLoadTime) / 1000;
      displayRate = Math.round((rate + elapsedSeconds) * 10) / 10;
    }, 100);
  }

  let copied = $state(false);
  let copyTimeout: ReturnType<typeof setTimeout> | null = null;

  async function copyEmail() {
    if (copied) return;
    try {
      await navigator.clipboard.writeText("hello@workingon.studio");
      copied = true;
      if (copyTimeout) clearTimeout(copyTimeout);
      copyTimeout = setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }

  onMount(() => {
    setTimeout(() => {
      startTimeBasedIncrement(baseRate);
    }, 500);
  });
</script>

<div class="flex flex-col gap-30 lg:w-xl">
  <div class="flex flex-col gap-8">
    <h1>
      <span class="text-primary">Contact.</span>
      <br />
      I work with founders that decide fast and ship faster.
    </h1>
    <!-- prettier-ignore -->
    <p>£<span class="tabular-nums">{displayRate.toFixed(2)}</span>/day. The rate increases while you think about it.</p>
  </div>
  <div class="flex flex-col gap-6">
    <div class="flex flex-row items-center gap-2">
      <button
        type="button"
        onclick={copyEmail}
        class="text-primary flex cursor-pointer flex-row items-center gap-4 text-2xl font-bold hover:underline"
      >
        hello@workingon.studio
        <iconify-icon
          icon={copied ? "ph:check-circle-duotone" : "ph:copy-duotone"}
          class="text-muted size-4.5 text-lg {copied ? 'text-primary' : ''}"
        ></iconify-icon>
      </button>
      {#if copied}
        <span class="text-xxs font-bold uppercase no-underline!">copied</span>
      {/if}
    </div>
    <p>If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead. Whatever makes you feel better.</p>
  </div>
</div>

<style>
  @reference "@styles/main.css";
</style>
