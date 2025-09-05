<script lang="ts">
  export let value: string = "tone-1";
  export let emoji: string = "👍";
</script>

<label
  class="tone-option flex cursor-pointer items-center rounded-lg border border-slate-300 p-3 has-[:focus]:border-blue-500/50 has-[:focus]:ring-1 has-[:focus]:ring-offset-2"
  for={value}
>
  <input type="radio" name="skinTone" {value} id={value} class="mr-4 cursor-pointer" />
  <span class="h-5 w-5 text-[21px] leading-[21px]">{emoji}</span>
</label>
