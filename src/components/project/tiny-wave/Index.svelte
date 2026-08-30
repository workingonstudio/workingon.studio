<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import Header from "./partials/Header.svelte";
  import Footer from "./partials/Footer.svelte";
  import Permissions from "./partials/Permissions.svelte";
  import RecordPanel from "./RecordPanel.svelte";
  import Hero from "./partials/Hero.svelte";
  import Controls from "./partials/Controls.svelte";
  import WaveOptions from "./partials/WaveOptions.svelte";

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

<div class="flex w-full flex-col items-center gap-12">
  <div class="mx-[5%] flex flex-col gap-12 lg:w-3xl">
    <Header />
    <Hero />
  </div>

  <div class="flex w-full flex-col">
    {#if checkedPermission && recorder.permissionState === "idle"}
      <div class="mx-auto flex flex-col lg:w-3xl">
        <Permissions />
      </div>
    {:else if checkedPermission && recorder.permissionState === "denied"}
      <div class="mx-auto flex flex-col lg:w-3xl">
        <Permissions />
      </div>
    {:else if checkedPermission && recorder.permissionState === "granted"}
      <RecordPanel />
      {#if !recorder.finalPath}
        <Controls />
      {:else}
        <WaveOptions />
      {/if}
    {/if}
  </div>

  <div class="mx-[5%] flex w-full flex-col gap-12 lg:w-3xl">
    <Footer />
  </div>
</div>

<style></style>
