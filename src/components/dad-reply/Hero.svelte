<script lang="ts">
  import FeaturePills from "./FeaturePills.svelte";
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Email from "./partials/Email.svelte";
</script>

<section class="flex gap-2 items-center">
  <div class="w-[684px] space-y-12">
    <h1 class="text-[40px] font-semibold">
      Instantly reply to your emails with minimal effort and maximum dad energy.
    </h1>
    <div class="w-[566px] text-slate-500 space-y-6">
      <p>
        Whether it’s that weekly status report, someone asking a question that
        is already in the wiki, or a simple request for coffee. There’s now a
        better way to respond to the mundane, inane or frivolous emails.
      </p>
      <FeaturePills />
    </div>
    <div class="flex gap-6 text-sm *:p-3 *:border-2 *:rounded-lg *:flex">
      <DownloadButton />
      <DownloadButton
        platform="Edge"
        icon="edge"
        borderColor="border-blue-600"
        bgColor="white"
        bgColorHover="white"
        textColor="text-blue-600"
      />
    </div>
  </div>
  <div
    class="flex-1 bg-white border border-slate-300 rounded-[14px] p-16 the-shadow"
  >
    <Email />
  </div>
</section>
