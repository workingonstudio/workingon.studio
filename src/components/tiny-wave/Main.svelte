<script lang="ts">
  import Footer from "./partials/Footer.svelte";
  import Header from "./partials/Header.svelte";
  import RecordPanel from "./partials/RecordPanel.svelte";
</script>

<div class="flex w-full flex-col gap-12 lg:w-2xl">
  <div class="flex flex-col items-center gap-6">
    <Header />
  </div>
  <RecordPanel />
  <Footer />
</div>

<style>
</style>
