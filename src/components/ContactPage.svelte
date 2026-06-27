<script lang="ts">
  import PageLayout from "@components/partials/PageLayout.svelte";
  import ContentPanel from "@components/partials/ContentPanel.svelte";
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

<ContentPanel borderBottom>
  <!-- prettier-ignore -->
  <h1>
  £<span class="tabular-nums">{displayRate.toFixed(2)}</span>/day. 
  I work with founders that decide fast and ship faster. 
  The rate increases while you think about it.
  </h1>
</ContentPanel>

<PageLayout variant="default">
  <ContentPanel>
    <h2 class="text-xl font-medium">Send email</h2>
    <div class="row flex flex-col gap-1">
      <div class="flex flex-row items-center gap-2">
        <button
          type="button"
          onclick={copyEmail}
          class="text-header flex cursor-pointer flex-row items-center gap-2 font-medium hover:underline"
        >
          hello@workingon.studio
          <iconify-icon icon={copied ? "ph:check-bold" : "ph:copy-bold"} class="size-4"></iconify-icon>
        </button>
        {#if copied}
          <span class="text-xxs text-muted uppercase no-underline!">copied</span>
        {/if}
      </div>
      <p class="text-muted text-sm">
        If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead. Whatever makes you feel better.
      </p>
    </div>
  </ContentPanel>
  <SocialProfiles />
</PageLayout>

<style>
  @reference "@styles/main.css";
</style>
