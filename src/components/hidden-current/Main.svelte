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
    <!-- <form action="" class="flex flex-row gap-3 rounded-full border border-neutral-300 p-4 shadow-lg">
      <label>
        <input type="text" class="w-xs rounded-full border border-neutral-300 px-4 py-2" />
      </label>
      <button
        type="button"
        class="bg-primary hover:border-primary hover:text-primary cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold text-white hover:bg-white"
      >
        Submit
      </button>
    </form> -->
    <div class="flex flex-col gap-6 md:flex md:flex-row">
      <a href="/" class="downloadBtn">
        <iconify-icon icon="fa7-brands:chrome" class="size-6 text-2xl"></iconify-icon>
        Add to Chrome
      </a>
      <a href="/" class="downloadBtn">
        <iconify-icon icon="fa7-brands:firefox" class="size-6 text-2xl"></iconify-icon>
        Add to Firefox
      </a>
    </div>
  </div>
  <Browser />
  <Footer />
</div>
