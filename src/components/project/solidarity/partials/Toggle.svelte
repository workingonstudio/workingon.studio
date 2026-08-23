<script lang="ts">
  import { toggleStore } from "@stores/solidarity/toggle";

  let { id = "" } = $props();

  function handleChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).checked;
    console.log("Toggle clicked, new value:", newValue);
    toggleStore.set(newValue);
  }

  $effect(() => {
    console.log("Store value changed to:", $toggleStore);
  });
</script>

<label class="flex flex-row gap-3">
  <span class="text-body mr-2 w-3 cursor-pointer text-right text-[10px] font-bold uppercase">Off</span>
  <div class="switch">
    <input {id} name={id} type="checkbox" class="sr-only" checked={$toggleStore} onchange={handleChange} />
    <div class="track"></div>
    <div class="thumb"></div>
  </div>
  <span class="text-body mr-2 w-3 cursor-pointer text-right text-[10px] font-bold uppercase">On</span>
</label>

<style>
  @reference "@styles/solidarity.css";
  .switch {
    @apply relative inline-block cursor-pointer rounded-full bg-transparent align-middle select-none;
  }

  .track {
    @apply h-4 w-8 rounded-full bg-gray-100 ring-1 inset-shadow-sm ring-gray-300;
  }

  .thumb {
    @apply absolute top-0 left-[0.5px] h-4 w-4 rounded-full border border-gray-200 bg-white transition-all duration-400 ease-in-out;
  }

  input[type="checkbox"]:checked ~ .thumb {
    @apply left-0 translate-x-full transform border border-emerald-800;
  }

  input[type="checkbox"]:checked ~ .track {
    @apply bg-primary transform border-none ring-1 ring-emerald-800 transition-colors;
  }
</style>
