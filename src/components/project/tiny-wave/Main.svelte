<script lang="ts">
  import Header from "./partials/Header.svelte";
  import Footer from "./partials/Footer.svelte";
  import Permissions from "./partials/Permissions.svelte";
  import RecordPanel from "./RecordPanel.svelte";

  import { slide } from "svelte/transition";

  import { recorder } from "@stores/tiny-wave/recorder.svelte";

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

<div class="flex w-full flex-col gap-6 lg:w-2xl">
  {#if checkedPermission && recorder.permissionState === "idle"}
    <Permissions />
  {/if}
  <div class="flex flex-col rounded-xl border border-gray-300 bg-white p-6 shadow-lg/5 ring ring-gray-100">
    <div class="flex flex-row items-center justify-between">
      <Header />
    </div>
    {#if !recorder.isMuted}
      <div transition:slide class="pt-6">
        <RecordPanel />
      </div>
    {/if}
  </div>

  <Footer />
</div>

<style>
</style>
