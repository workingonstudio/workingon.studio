<script lang="ts">
  export let text: string = "";
  export let bgColor: string = "bg-slate-200";
</script>

<span
  class="label inline-block px-2 py-1 rounded-full text-[10px] align-middle text-slate-700 {bgColor}"
  >{text}
</span>
