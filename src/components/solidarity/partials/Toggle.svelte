<script lang="ts">
  import { toggleStore } from "@stores/solidarity/toggle";

  let { id = "" } = $props();

  let checked = $state(false);

  $effect(() => {
    const unsubscribe = toggleStore.subscribe((value) => {
      checked = value;
    });
    return unsubscribe;
  });

  function handleChange(event: Event) {
    toggleStore.set((event.target as HTMLInputElement).checked);
  }

  let text = $derived(checked ? "on" : "off");
</script>

<label for={id}>
  <span class="font-mulish mr-2 w-3 cursor-pointer text-right text-[10px] font-bold uppercase">{text}</span>
  <div class="switch">
    <input {id} name={id} type="checkbox" class="sr-only" bind:checked onchange={handleChange} />
    <div class="track"></div>
    <div class="thumb"></div>
  </div>
</label>

<style>
  @reference "@styles/solidarity.css";
  .switch {
    @apply relative inline-block cursor-pointer rounded-full bg-transparent align-middle select-none;
  }

  .track {
    @apply h-4 w-8 rounded-full bg-stone-100 ring-1 ring-stone-300;
  }

  .thumb {
    @apply absolute top-0 left-0 h-4 w-4 rounded-full border border-stone-300 bg-white transition-all duration-500 ease-in-out;
  }

  input[type="checkbox"]:checked ~ .thumb {
    @apply translate-x-full transform border border-emerald-300;
  }

  input[type="checkbox"]:checked ~ .track {
    @apply transform border-none bg-emerald-300 ring-1 ring-emerald-500 transition-colors;
  }
</style>
