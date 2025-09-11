<script lang="ts">
  import FeaturePills from "./FeaturePills.svelte";
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Email from "./partials/Email.svelte";
</script>

<section class="flex items-center gap-2">
  <div class="w-2xl space-y-12">
    <h1>Instantly reply to your emails with minimal effort and maximum dad energy.</h1>
    <div class="w-xl space-y-6">
      <p>
        Whether it’s that weekly status report, someone asking a question that is already in the wiki, or a simple
        request for coffee. There’s now a better way to respond to the mundane, inane or frivolous emails.
      </p>
      <FeaturePills />
    </div>
    <div class="flex gap-6">
      <DownloadButton
        label="Download for Chrome"
        icon
        iconRef="chrome"
        downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
      />
      <DownloadButton icon label="Download for IE 6.0" iconRef="internet-explorer" style="hollow" />
    </div>
  </div>
  <div class="card email-container the-shadow flex-1">
    <Email />
  </div>
</section>

<style>
  @reference "@styles/dad-reply.css";
  .email-container {
    @apply mr-0 pt-12 pr-12 pb-12 pl-12;
    @apply rounded-xl;
    @apply lg:-mr-[calc(50vw-50%)] lg:rounded-none lg:rounded-l-xl lg:p-16 lg:pr-0;
    @apply 2xl:-mr-[calc(25vw-25%)] 2xl:rounded-xl 2xl:p-16;
  }
</style>
