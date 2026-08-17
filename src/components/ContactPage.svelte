<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import { onMount } from "svelte";
  import { dayRate } from "../stores/dayRate";
  import SocialProfiles from "./partials/SocialProfiles.svelte";

  let displayRate = $state(500);
  let timeInterval: ReturnType<typeof setInterval> | null = null;
  let pageLoadTime = 0;

  function animateRate(startRate: number, targetRate: number) {
    const duration = 800;
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      displayRate = Math.round((startRate + (targetRate - startRate) * easeProgress) * 10) / 10;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  function startTimeBasedIncrement(baseRate: number) {
    pageLoadTime = Date.now();

    // Update every 100ms (10 times per second for smooth pence updates)
    timeInterval = setInterval(() => {
      const elapsedSeconds = (Date.now() - pageLoadTime) / 1000;
      displayRate = Math.round((baseRate + elapsedSeconds) * 10) / 10;
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
      startTimeBasedIncrement(displayRate);
    }, 500);
  });
</script>

<PageLayout extraStyles="w-full lg:w-xl py-12">
  <h1>
    <span class="text-primary">Contact</span>
    <br />
    I work with founders that decide fast and ship faster.
  </h1>

  <div class="row flex flex-col gap-4">
    <!-- prettier-ignore -->
    <p>£<span class="tabular-nums">{displayRate.toFixed(2)}</span>/day. The rate increases while you think about it.</p>
    <div class="flex flex-row items-center gap-2">
      <button
        type="button"
        onclick={copyEmail}
        class="text-primary flex cursor-pointer flex-row items-center gap-4 text-2xl font-bold"
      >
        hello@workingon.studio
        <iconify-icon
          icon={copied ? "ph:check-circle-duotone" : "ph:copy-duotone"}
          class="text-muted size-4.5 text-lg {copied ? 'text-primary' : ''}"
        ></iconify-icon>
      </button>
      {#if copied}
        <span class="text-xxs text-header font-bold uppercase no-underline!">copied</span>
      {/if}
    </div>
    <p>If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead. Whatever makes you feel better.</p>
  </div>
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
