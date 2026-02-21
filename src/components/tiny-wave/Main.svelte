<script lang="ts">
  import Footer from "./partials/Footer.svelte";
  import Header from "./partials/Header.svelte";
  import Permissions from "./partials/Permissions.svelte";
  import RecordPanel from "./RecordPanel.svelte";
  import { recorder } from "@stores/tiny-wave/recorder.svelte";
</script>

<div class="flex w-full flex-col gap-6 lg:w-2xl">
  <Permissions />
  <div class="flex flex-col gap-6 rounded-xl border border-gray-300 bg-white p-6 shadow-lg/5 ring ring-gray-100">
    <div class="flex flex-row items-center justify-between">
      <Header />
    </div>
    {#if !recorder.isMuted}
      <RecordPanel />
    {/if}
  </div>
  <Footer />
</div>

<style>
</style>
