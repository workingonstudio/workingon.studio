<script lang="ts">
  export let text: string = "";
  // Update to be STYLES for more Flexibility.
  export let bgColor: string = "bg-slate-200";
</script>

<span class="label font-mulish inline-flex rounded-full px-2 py-1 text-[10px] font-bold text-slate-700 {bgColor}">
  {text}
</span>
