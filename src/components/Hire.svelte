<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";
  import { onMount } from "svelte";
  import { dayRate } from "../stores/dayRate";
  import { get } from "svelte/store";

  let displayRate = 500;

  function animateRate(startRate: number, targetRate: number) {
    const duration = 800;
    const startTime = Date.now();

    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      displayRate = Math.round(startRate + (targetRate - startRate) * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }

  onMount(() => {
    const startRate = get(dayRate).rate;
    dayRate.incrementVisit();
    const target = get(dayRate).rate;

    animateRate(startRate, target);
  });
</script>

<PageHeader>
  <h1>
    Currently available for consultancy gigs. You know, you pay me £{displayRate}/day*.
    <br class="hidden xl:flex" />
    I tell you what to do.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>
      Whether you take my advice is entirely up to you. I don’t care. I’ll be riding into the sunset with a sack of
      money.
    </p>
    <small class="text-body flex flex-row gap-1">
      <span class="text-xl">*</span>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <p class="text-sm/relaxed">
            Each time you visit this page my day rate <strong>increases by £10</strong>
            .
            <br />
            If it takes you too long to decide anything this is your punishment.
          </p>
        </div>
      </div>
    </small>
  </div>
</PageHeader>

<section class="mb-10 max-w-2xl space-y-4 lg:mx-2 2xl:mt-5 2xl:w-5xl">
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
      <span class="flex h-8 w-8 items-center">
        <iconify-icon icon="carbon:mail-all" class="text-3xl text-gray-500"></iconify-icon>
      </span>
      <div class="flex flex-row items-center gap-2">
        <a
          href="mailto:extra.admin@workingon.studio?subject=Can%20I/We%20work%20with%20you%3F&"
          onclick={() => {
            const currentRate = displayRate;
            dayRate.reset();
            animateRate(currentRate, 500);
          }}
        >
          extra.admin@workingon.studio
        </a>
      </div>
    </div>
    <p class="text-sm lg:ml-14">
      If I don't reply within 7 days, assume it's a no, I'm on holiday, or dead. Whatever makes you feel better.
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
