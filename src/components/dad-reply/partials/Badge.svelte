<script lang="ts">
  export let text: string = "";
  export let bgColor: string = "bg-slate-200";
</script>

<span class="label inline-flex rounded-full px-2 py-1 text-[10px] font-medium text-slate-700 {bgColor}">
  {text}
</span>
