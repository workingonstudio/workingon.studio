<script lang="ts">
  import Footer from "./partials/Footer.svelte";
  import Header from "./partials/Header.svelte";
  import RecordPanel from "./partials/RecordPanel.svelte";
</script>

<div class="flex w-full flex-col gap-6 lg:w-2xl">
  <div class="flex flex-col gap-6 rounded-xl border border-gray-300 bg-white p-6 shadow-lg/5 ring ring-gray-100">
    <div class="flex flex-row items-center justify-between">
      <Header />
    </div>
    <RecordPanel />
  </div>
  <Footer />
</div>

<style>
</style>
