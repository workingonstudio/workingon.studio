<script lang="ts">
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import Header from "./partials/Header.svelte";
  import Footer from "./partials/Footer.svelte";
  import Permissions from "./partials/Permissions.svelte";
  import RecordPanel from "./RecordPanel.svelte";
  import Hero from "./partials/Hero.svelte";
  import Controls from "./partials/Controls.svelte";

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
  {#if checkedPermission && recorder.permissionState === "idle"}
    <Permissions />
  {/if}
  <div class="flex w-full flex-col">
    {#if !recorder.isMuted}
      <RecordPanel />
      {#if !recorder.finalPath}
        <Controls />
      {/if}
    {/if}
  </div>

  <div class="mx-[5%] flex w-full flex-col gap-12 lg:w-3xl">
    <Footer />
  </div>
</div>

<style>
</style>
