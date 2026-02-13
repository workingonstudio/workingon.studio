<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { onMount } from "svelte";
  import { dayRate } from "../stores/dayRate";
  import SocialProfiles from "./partials/SocialProfiles.svelte";

  let displayRate = 500;
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

  onMount(() => {
    setTimeout(() => {
      startTimeBasedIncrement(displayRate);
    }, 500);
  });
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
  £<span class="tabular-nums">{displayRate.toFixed(2)}</span>/day*. 
  I work with teams that decide fast and ship faster. 
  The rate increases while you think about it.
  </h1>
</PageHeader>

<section
  class="border-surface-border divide-surface-border grid grid-cols-1 divide-x-0 divide-y border border-b-0 lg:grid-cols-2 lg:divide-x lg:divide-y-0"
>
  <div class=" flex flex-col gap-6">
    <div class="content border-surface-border gap-5 border-0 lg:border-b">
      <h3 class="text-xl font-medium">Send email</h3>
      <div class="flex flex-col gap-1">
        <a
          href="mailto:hello@workingon.studio?subject=Can%20I/We%20work%20with%20you%3F&"
          onclick={() => {
            const currentRate = displayRate;
            dayRate.reset();
            // Clear the time interval
            if (timeInterval !== null) {
              clearInterval(timeInterval);
            }
            // Animate back to base rate
            animateRate(currentRate, 500);
            // Restart time-based increment after animation
            setTimeout(() => {
              startTimeBasedIncrement(500);
            }, 800);
          }}
          class="text-header flex flex-row items-center gap-2 font-medium"
        >
          hello@workingon.studio
          <iconify-icon icon="ph:arrow-up-right-bold"></iconify-icon>
        </a>
        <p class="text-muted text-sm">
          If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead.
          <br />
          Whatever makes you feel better.
        </p>
      </div>
    </div>
  </div>

  <SocialProfiles />
</section>

<style>
  @reference "@styles/main.css";
</style>
