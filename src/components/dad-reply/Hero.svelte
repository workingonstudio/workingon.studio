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
        label="Download from Chrome web store"
        icon
        iconRef="chrome"
        downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
      />
      <DownloadButton icon label="Download for Internet Explorer" iconRef="internet-explorer" style="hollow" />
    </div>
  </div>
  <div class="card the-shadow mr-2 flex-1 pt-16 pr-16 pb-16 pl-16 lg:-mr-[calc(50vw-50%)]">
    <Email />
  </div>
</section>

<style>
  @reference "@styles/dad-reply.css";
  .email-container {
    @apply pt-16 pr-16 pb-16 pl-16;
    @apply rounded-[14px] border border-slate-300 bg-white;
    @apply md:rounded;
    @apply lg:rounded-none lg:rounded-l-[14px] lg:pr-0;
  }
</style>
