<script lang="ts">
  import FeaturePills from "./FeaturePills.svelte";
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Email from "./partials/Email.svelte";
</script>

<section class="flex items-center gap-2">
  <div class="w-[684px] space-y-12">
    <h1 class="text-[40px] font-semibold">
      Instantly reply to your emails with minimal effort and maximum dad energy.
    </h1>
    <div class="w-[566px] space-y-6 text-slate-500">
      <p>
        Whether it’s that weekly status report, someone asking a question that is already in the wiki, or a simple
        request for coffee. There’s now a better way to respond to the mundane, inane or frivolous emails.
      </p>
      <FeaturePills />
    </div>
    <div class="flex gap-6">
      <DownloadButton downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop" />
      <DownloadButton
        platform="Internet Explorer"
        icon="internet-explorer"
        borderColor="border-blue-600"
        bgColor="white"
        bgColorHover="white"
        textColor="text-blue-600"
      />
    </div>
  </div>
  <div
    class="the-shadow mr-0 flex-1 rounded-[14px] border border-slate-300 bg-white pt-16 pr-16 pb-16 pl-16 lg:-mr-[calc(50vw-50%)] lg:rounded-none lg:rounded-l-[14px] lg:pr-0"
  >
    <Email />
  </div>
</section>
