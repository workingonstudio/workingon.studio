<script lang="ts">
</script>

<section class="flex w-full flex-col gap-30 py-12">
  <div class="flex flex-col gap-8 lg:w-xl">
    <h1>
      <span class="text-primary">Creative direction</span>
      for
      <br />
      companies ready to grow.
    </h1>
    <div class="flex flex-col gap-4">
      <p>
        I work with companies to raise capital, increase user numbers and customer satisfaction through carefully
        considered creative decisions.
      </p>
      <p>From Seed to Series A to Acquisition.</p>
    </div>
    <a
      href="https://calendar.proton.me/bookings#NVvvSVCpaKbNT4DbZlq5V6A54KEogsB3x3MKEFEWYyY="
      target="_blank"
      class="self-start"
    >
      Book a call
    </a>
  </div>
  <div class="flex flex-col gap-12">
    <div class="flex w-full flex-col lg:w-xl">
      <h2>
        <span class="text-primary">Work.</span>
        <br />
        Selection of works.
      </h2>
    </div>
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div class="work-wrapper items-center">
        <img src="/images/work/eleven-play.png" width="260" loading="lazy" />
      </div>
      <div class="work-wrapper items-center justify-end">
        <img src="/images/work/eleven-record.png" width="260" loading="lazy" />
      </div>
      <div class="work-wrapper relative items-center justify-end">
        <img
          src="/images/work/eleven-why.png"
          width="770"
          class="squircle-3xl absolute top-12 left-12"
          loading="lazy"
        />
      </div>
      <div class="work-wrapper relative items-center justify-end">
        <img
          src="/images/work/heatoshi-account.png"
          width="708"
          class="squircle-3xl absolute top-12 left-12"
          loading="lazy"
        />
      </div>
      <div class="work-wrapper relative items-center justify-end">
        <img
          src="/images/work/argo-transactions.png"
          width="780"
          class="squircle-3xl absolute top-12 left-12"
          loading="lazy"
        />
      </div>
      <div class="work-wrapper relative items-center justify-end">
        <img
          src="/images/work/heatoshi-web.png"
          width="780"
          class="squircle-3xl absolute top-12 left-12"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

<style>
  @reference "@styles/main.css";
  .work-wrapper {
    @apply squircle-3xl bg-surface flex h-88 flex-col overflow-hidden border-transparent p-12;
  }
  .work-wrapper img {
    @apply max-w-none flex-1 object-cover;
  }
  a {
    @apply bg-primary rounded-full border border-transparent px-5 py-3 text-sm font-semibold text-white no-underline;
    @apply hover:text-primary hover:bg-transparent;
    @apply transition-colors duration-300;
  }
</style>
