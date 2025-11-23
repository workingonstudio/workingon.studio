<script lang="ts">
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Email from "./partials/Email.svelte";
  import GoogleFeature from "./partials/GoogleFeature.svelte";
</script>

<section class="mt-16 flex flex-col gap-12 md:mt-0 md:gap-4 lg:mt-20 lg:flex-row">
  <div class="w-full space-y-12 md:text-center lg:w-2xl lg:text-left">
    <div class="flex flex-col gap-2">
      <div class="flex flex-row justify-center lg:justify-start">
        <GoogleFeature />
      </div>
      <!-- prettier-ignore -->
      <h1>
        One-click emoji<br/>replies for Gmail.
      </h1>
    </div>
    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-center lg:justify-normal">
      <DownloadButton
        label="Add to Chrome"
        icon
        iconRef="chrome"
        downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
      />
      <div class="btn relative cursor-default items-center gap-2 text-gray-400">
        <iconify-icon icon="fa7-brands:firefox" class="text-xl"></iconify-icon>
        Add to Firefox
        <span class="text-text-body rounded-full bg-orange-100 px-2 py-0.5 text-[9px]">Soon</span>
      </div>
    </div>
    <div class="quote flex flex-row items-center gap-6">
      <span class="text-xl">💬</span>
      <div class="flex flex-col gap-1">
        <blockquote cite="https://x.com/rrhoover/status/1954983479135047766">
          Y'all building AGI when you could be innovating like this.
        </blockquote>
        <a href="https://x.com/rrhoover/status/1954983479135047766" target="_blank">
          Ryan Hoover. Founder of Product Hunt.
        </a>
      </div>
    </div>
  </div>
  <div class="card email-container the-shadow flex-1 md:order-none lg:max-w-3xl">
    <Email />
  </div>
</section>

<style>
  @reference "@styles/dad-reply.css";
  .quote {
    blockquote {
      @apply text-sm font-semibold italic;
    }
    a {
      @apply text-xs;
    }
  }

  .email-container {
    @apply md:w-2/3;
    @apply md:relative md:bottom-0;
    @apply mr-0 px-4 py-6 sm:px-8 sm:py-12;
    @apply rounded-xl;
    @apply lg:-mr-[calc(50vw-50%)] lg:rounded-none lg:rounded-l-xl;
    @apply 2xl:-mr-[calc(25vw-25%)] 2xl:rounded-xl;
  }
</style>
