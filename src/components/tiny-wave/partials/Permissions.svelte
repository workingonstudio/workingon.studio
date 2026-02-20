<script lang="ts">
  import PrivacyModal from "./PrivacyModal.svelte";
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import { Dialog } from "melt/builders";

  const dialog = new Dialog();
  let checkedPermission = $state(false);

  $effect(() => {
    navigator.permissions.query({ name: "microphone" as PermissionName }).then((result) => {
      if (result.state === "granted") {
        recorder.handleMicClick();
      }
      checkedPermission = true;
    });
  });
</script>

{#if checkedPermission && recorder.permissionState === "idle"}
  <section class="flex flex-col gap-6 rounded-xl border border-gray-300 bg-white p-6 shadow-lg/5 ring ring-gray-100">
    <div class="flex flex-col gap-2">
      <h2 class="color-body text-base font-bold">Allow permissions to get started.</h2>
      <p class="text-muted text-sm">
        This doesn’t work without permission to hear you. It needs access to your microphone.
        <br class="hidden md:block" />
        Nothing is stored, it all works locally. Don’t believe me? Turn off wifi if you want.
      </p>
    </div>
    <div class="flex flex-row gap-4 font-bold">
      <button
        type="button"
        onclick={() => recorder.handleMicClick()}
        class="btn text-muted hover:text-body px-3.5 py-2 text-sm"
      >
        Allow access
      </button>
      <button
        {...dialog.trigger}
        type="button"
        class="btn text-muted hover:text-body border-none px-3.5 py-2 text-sm shadow-none ring-0 hover:bg-gray-50"
      >
        Privacy policy
      </button>
    </div>
  </section>
{/if}

<div {...dialog.overlay} class="bg-white/20"></div>
<dialog
  {...dialog.content}
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white p-12 shadow-lg ring ring-gray-300"
>
  <PrivacyModal />
</dialog>
