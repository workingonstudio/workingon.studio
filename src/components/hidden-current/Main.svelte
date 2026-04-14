<script lang="ts">
  import Logo from "./partials/Logo.svelte";
  import Browser from "./partials/Browser.svelte";
  import Footer from "./partials/Footer.svelte";
</script>

<div class="flex flex-col items-center gap-12">
  <div class="flex max-w-3xl flex-col items-center gap-12">
    <Logo />
    <div class="flex flex-col gap-6 text-center text-pretty">
      <h1>Your prompts really are costing the earth.</h1>
      <p class="text-md md:text-xl">Track how much water and power your prompts are using.*</p>
      <small class="flex flex-row justify-center gap-1">
        * only compatible with <div class="flex flex-row items-center gap-1">
          <iconify-icon icon="fa7-brands:claude" class="size-3 text-sm text-[#C15F3C]"></iconify-icon>
          <strong>Claude</strong>
        </div>
      </small>
    </div>
    <div class="flex flex-col items-center gap-6 md:flex md:flex-row">
      <button type="button" disabled class="downloadBtn">
        <iconify-icon icon="logos:chrome" class="size-6 text-2xl"></iconify-icon>
        Awaiting Approval
      </button>
      <div class="flex flex-row items-center gap-3">
        <span class="text-xxs text-primaryfont-semibold italic">&#8230;coming soon</span>
        <iconify-icon icon="logos:firefox" class="size-6 text-2xl"></iconify-icon>
        <iconify-icon icon="logos:safari" class="size-6 text-2xl"></iconify-icon>
        <iconify-icon icon="logos:microsoft-edge" class="size-6 text-2xl"></iconify-icon>
      </div>
    </div>
  </div>
  <Browser />
  <Footer />
</div>
