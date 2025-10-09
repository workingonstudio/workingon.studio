<script lang="ts">
  import FeaturePills from "./FeaturePills.svelte";
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
    <h1>
      Stop wasting time on emails.
      <br />
      Reply with a single click.
      <br />
      No typing. No thinking.
    </h1>
    <div class="w-full space-y-6 lg:w-5/6">
      <p class="text-pretty">
        Whether it's that weekly status report, someone asking a question that is already in the wiki, or a simple
        request for coffee, there's now a better way to respond to the mundane, inane, or frivolous emails.
      </p>
      <FeaturePills />
    </div>
    <div class="flex flex-col gap-6 md:flex-row md:justify-center lg:justify-normal">
      <DownloadButton
        label="Download for Chrome"
        icon
        iconRef="chrome"
        downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
      />
      <button class="btn hollow gap-2.5" on:click|preventDefault={switchButton} disabled={IEButton.clicked}>
        {#if IEButton.clicked}
          <span class="h-[20px] w-[25px] text-xl leading-none">🤔</span>
        {:else}
          <i class="fa-brands fa-internet-explorer text-xl"></i>
        {/if}
        {IEButton.label}
      </button>
    </div>
  </div>
  <div class="card email-container the-shadow flex-1 md:order-none lg:max-w-3xl">
    <Email />
  </div>
</section>

<style>
  @reference "@styles/dad-reply.css";
  .btn {
    &.hollow {
      &:disabled {
        @apply text-text;
      }
    }
  }
  .email-container {
    @apply md:w-2/3;
    @apply md:relative md:bottom-0;
    @apply mr-0 px-8 py-12;
    @apply rounded-xl;
    @apply lg:-mr-[calc(50vw-50%)] lg:rounded-none lg:rounded-l-xl lg:pr-0;
    @apply 2xl:-mr-[calc(25vw-25%)] 2xl:rounded-xl;
  }
</style>
