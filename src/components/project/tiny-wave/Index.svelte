<script lang="ts">
  import Header from "./partials/Header.svelte";
  import Footer from "./partials/Footer.svelte";
  import Permissions from "./partials/Permissions.svelte";
  import RecordPanel from "./RecordPanel.svelte";

  import { slide } from "svelte/transition";

  import { recorder } from "@stores/tiny-wave/recorder.svelte";
  import Hero from "./partials/Hero.svelte";

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

<div class="flex w-full flex-col gap-12 lg:w-3xl">
  <Header />
  <Hero />
  {#if checkedPermission && recorder.permissionState === "idle"}
    <Permissions />
  {/if}
  <div class="flex flex-col">
    <!-- <div class="flex flex-row items-center justify-between"></div>
    {#if !recorder.isMuted}
      <div transition:slide class="pt-6">
        <RecordPanel />
      </div>
    {/if} -->
  </div>

  <Footer />
</div>

<style>
</style>
