<script lang="ts">
  import Logo from "@components/partials/Logo.svelte";
  import PrivacyModal from "./PrivacyModal.svelte";
  import { Dialog } from "melt/builders";

  const dialog = new Dialog();
</script>

<footer class="text-xxs text-muted/50 flex flex-col items-center justify-between gap-1 px-6 md:flex-row">
  <a href="/" class="flex flex-row items-center gap-2 font-bold hover:underline">
    <Logo width={19} />
    workingonstudio ltd, no: 16700615
  </a>
  <ul class="flex flex-row gap-3">
    <li><button {...dialog.trigger} class="cursor-pointer hover:underline">privacy policy</button></li>
    <li>copywrite 2026</li>
  </ul>
</footer>

<div {...dialog.overlay} class="bg-white/20"></div>
<dialog
  {...dialog.content}
  class="fixed top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white shadow-lg ring ring-gray-300 md:w-md"
>
  <PrivacyModal />
</dialog>
