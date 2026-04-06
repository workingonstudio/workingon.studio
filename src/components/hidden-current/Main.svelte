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
      <p class="text-xl">Track how much water and power your prompts are using.*</p>
      <small class="flex flex-row justify-center gap-1">
        * only compatible with <div class="flex flex-row items-center gap-1">
          <iconify-icon icon="fa7-brands:claude" class="size-3 text-sm text-[#C15F3C]"></iconify-icon>
          <strong>Claude</strong>
        </div>
      </small>
    </div>
    <div class="flex flex-col gap-6 md:flex-row">
      <a
        href="/"
        class="hover:border-primary hover:text-primary flex flex-row items-center gap-4.5 rounded-full border-3 border-transparent bg-neutral-900 px-5 py-4 text-base font-bold text-white transition-colors duration-300 hover:border-3 hover:bg-white"
      >
        <iconify-icon icon="fa7-brands:chrome" class="size-6 text-2xl"></iconify-icon>
        Add to Chrome
      </a>
      <a
        href="/"
        class="hover:border-primary hover:text-primary flex flex-row items-center gap-4.5 rounded-full border-3 border-transparent bg-neutral-900 px-5 py-4 text-base font-bold text-white transition-colors duration-300 hover:border-3 hover:bg-white"
      >
        <iconify-icon icon="fa7-brands:firefox" class="size-6 text-2xl"></iconify-icon>
        Add to Firefox
      </a>
    </div>
  </div>
  <Browser />
  <Footer />
</div>
