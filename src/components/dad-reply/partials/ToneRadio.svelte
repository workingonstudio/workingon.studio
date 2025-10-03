<script lang="ts">
  import { selectedTone } from "@stores/dadreply/toneStore";

  export let value: string = "tone-1";
  export let emoji: string = "👍";
</script>

<label
  class="tone-option flex cursor-pointer items-center rounded-lg border border-slate-300 p-3 has-[:focus]:border-blue-500 has-[:focus]:ring-1 has-[:focus]:ring-blue-500/50 has-[:focus]:ring-offset-2"
  for={value}
>
  <input
    type="radio"
    name="skinTone"
    {value}
    id={value}
    bind:group={$selectedTone}
    class="mr-3 cursor-pointer focus:outline-none"
  />
  <span class="h-5 w-5 text-[20px] leading-[20px]">{emoji}</span>
</label>

<style>
  @reference "@styles/dad-reply.css";
  input[type="radio"] {
    appearance: none;
    width: 1rem;
    height: 1rem;
    @apply rounded-full border border-slate-300 bg-white;
  }
  input[type="radio"]:checked {
    @apply border-blue-600 bg-blue-600;
    background-image: radial-gradient(circle, white 30%, transparent 35%);
    &:focus {
      @apply ring-2 ring-blue-600 ring-offset-2;
    }
  }
</style>
