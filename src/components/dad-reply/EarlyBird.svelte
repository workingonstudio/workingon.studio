<script lang="ts">
  import Badge from "./partials/Badge.svelte";
</script>

<div class="flex flex-row justify-center">
  <div class="flex w-md flex-col space-y-4">
    <span class="cursor-default text-4xl">🪱</span>
    <h2>Early bird offer!</h2>
    <p>It’s what you always dream about as a child. Now I am giving them away*.</p>
    <small>* the pro trial that is, not a child that would be mental.</small>
  </div>
  <div class="card">
    <div class="flex flex-row space-x-3">
      <Badge text="Lifetime Pro" bgColor="bg-orange-100" />
      <Badge text="Limited" bgColor="bg-blue-100" />
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
