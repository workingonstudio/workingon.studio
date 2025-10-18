<script lang="ts">
  import PageHeader from "./partials/PageHeader.svelte";
  import { onMount } from "svelte";
  import { dayRate } from "../stores/dayRate";
  import { get } from "svelte/store";

  let displayRate = 500;

  onMount(() => {
    // Get the CURRENT rate BEFORE incrementing
    const startRate = get(dayRate).rate;

    // Now increment
    dayRate.incrementVisit();

    // Get the NEW rate
    const target = get(dayRate).rate;

    // Animate from start to target
    const duration = 800;
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      displayRate = Math.round(startRate + (target - startRate) * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  });
</script>

<PageHeader>
  <h1>
    Currently available for consultancy gigs. You know, you pay me £{displayRate}/day*. I tell you what to do.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>
      Whether you take my advice is entirely up to you. I don’t care. I’ll be riding into the sunset with a sack of
      money.
    </p>
    <small class="text-body flex flex-row gap-1">
      <span class="text-xl">*</span>
      <!-- prettier-ignore -->
      <div class="flex flex-col gap-4">
        <p>Each time you visit this page my day rate <strong>increases by £10</strong>*.</p>
        <div class="flex flex-row gap-1">
          <span class="text-xl">*</span>
          <div class="flex flex-col gap-1">
            <p class="text-xs">If it takes you too long to decide anything this is your punishment.</p>
            <p class="text-xs">Clicking my email email will reset it.</p>
          </div>
        </div>
      </div>
    </small>
  </div>
</PageHeader>

<section class="mb-10 max-w-2xl space-y-4 lg:mx-2 2xl:mt-5 2xl:w-5xl">
  <a class="flex flex-col gap-4" href="mailto:hello.luckily704@passmail.com" onclick={dayRate.reset}>
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
      <iconify-icon icon="carbon:mail-all" class="text-3xl text-gray-500" />
      <span>hello.luckily704@passmail.com</span>
    </div>
    <p class="text-sm lg:ml-14">
      This will forward to my inbox.
      <br />
      You think I’m just gonna put it here for bots to grab.
    </p>
  </a>
</section>

<style>
  @reference "@styles/global.css";
  a {
    span {
      @apply text-primary text-lg underline lg:text-3xl;
    }
    &:hover {
      span {
        @apply no-underline;
      }
    }
  }
</style>
