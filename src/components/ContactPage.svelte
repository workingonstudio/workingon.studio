<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { onMount } from "svelte";
  import { dayRate } from "../stores/dayRate";

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
    Want to work together? £<span class="tabular-nums">{displayRate.toFixed(2)}</span>/day*. I tell you what to do.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>Take my advice or don't. Either way, I'm riding into the sunset with a sack of money.</p>
    <div class="flex flex-row gap-2">
      <p>&#42;</p>
      <p class="text-sm">
        This rate increases every second you're here. If it takes you too long to decide, you'll be a nightmare to work
        with.
      </p>
    </div>
  </div>
</PageHeader>

<section class="mb-10 max-w-2xl space-y-4 lg:mx-2 2xl:mt-5 2xl:w-5xl">
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
      <iconify-icon icon="carbon:mail-all" class="mt-0 size-8 text-3xl text-gray-500 md:mt-1"></iconify-icon>
      <div class="flex flex-row items-center gap-2">
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
        >
          hello@workingon.studio
        </a>
      </div>
    </div>
    <p class="text-sm lg:ml-14">
      If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead.
      <br />
      Whatever makes you feel better.
    </p>
  </div>
</section>

<style>
  @reference "@styles/main.css";
  a {
    @apply text-primary text-lg underline lg:text-3xl;
    &:hover {
      @apply no-underline;
    }
  }
</style>
