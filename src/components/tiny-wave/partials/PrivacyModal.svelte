<script lang="ts">
  import Logo from "@components/partials/Logo.svelte";
</script>

<section class="flex flex-col gap-12 p-6 md:p-12">
  <div class="flex flex-row items-center gap-2 text-base">
    <iconify-icon icon="ph:waveform" class="text-primary size-6 text-2xl"></iconify-icon>
    <div class="flex flex-row items-center gap-2">tinywave</div>
  </div>
  <div class="flex flex-col gap-6">
    <div class="text-muted flex flex-col gap-3 text-sm text-pretty">
      <h2 class="text-body text-base font-bold">Privacy Policy</h2>
      <p>
        tinywave records audio directly in your browser. No audio, recordings, or personal data are sent to any server
        or stored anywhere outside your device.
      </p>
      <p>
        Microphone access is requested solely to generate the waveform visualisation. The resulting SVG contains no
        audio data.
      </p>
      <p>
        It uses Umami for anonymous analytics. Umami collects no personal data, uses no cookies, and is fully GDPR
        compliant.
      </p>
    </div>
  </div>
  <div class="text-xxs text-muted/50 flex flex-row justify-between">
    <a href="/" class="flex flex-row items-center gap-2 font-bold hover:underline">
      <Logo width={19} />
      workingonstudio ltd, no: 16700615
    </a>
  </div>
</section>
