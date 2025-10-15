<script lang="ts">
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Email from "./partials/Email.svelte";

  $: IEButton = {
    icon: "fa-brands fa-internet-explorer",
    label: "Download for IE 6.0",
    clicked: false,
  };

  function switchButton() {
    IEButton.label = "Does Mum know you're on here?";
    IEButton.clicked = true;
  }
</script>

<section class="mt-20 flex flex-col gap-12 md:mt-0 md:items-center md:gap-4 lg:flex-row">
  <div class="w-full space-y-12 md:my-16 md:items-center md:text-center lg:w-2xl lg:text-left">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row">
        <div class="text-text-body flex flex-row items-center gap-2">
          <iconify-icon icon="material-symbols:verified-outline-rounded" class="text-lg"></iconify-icon>
          <strong class="text-xs font-semibold">Google Featured</strong>
        </div>
        <div class="text-text-body ml-6 flex flex-row items-center gap-0.5 *:text-amber-300">
          <iconify-icon icon="material-symbols:star-rounded" class="text-md"></iconify-icon>
          <iconify-icon icon="material-symbols:star-rounded" class="text-md"></iconify-icon>
          <iconify-icon icon="material-symbols:star-rounded" class="text-md"></iconify-icon>
          <iconify-icon icon="material-symbols:star-rounded" class="text-md"></iconify-icon>
          <iconify-icon icon="material-symbols:star-rounded" class="text-md"></iconify-icon>
        </div>
      </div>
      <!-- prettier-ignore -->
      <h1>
        Email triage in one click.*
        <br />
        Don't type. Decide.
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
    <div class="w-full space-y-8 lg:w-5/6">
      <small>* "But&#8230;Outlook already does this" &mdash; you're using Outlook, sit down.</small>
    </div>
  </div>
  <div class="card email-container the-shadow flex-1 md:order-none lg:max-w-3xl">
    <Email />
  </div>
</section>

<style>
  @reference "@styles/dad-reply.css";
  .email-container {
    @apply md:w-2/3;
    @apply md:relative md:bottom-0;
    @apply mr-0 px-4 py-6 sm:px-8 sm:py-12;
    @apply rounded-xl;
    @apply lg:-mr-[calc(50vw-50%)] lg:rounded-none lg:rounded-l-xl lg:pr-0;
    @apply 2xl:-mr-[calc(25vw-25%)] 2xl:rounded-xl;
  }
</style>
