<script lang="ts">
  export let text: string = "";
  // Update to be STYLES for more Flexibility.
  export let bgColor: string = "bg-slate-200";
  export let otherClasses: string = "";
</script>

<span class="label inline-flex rounded-full px-2 py-1 text-[10px] font-medium text-slate-700 {bgColor} {otherClasses}">
  {text}
</span>
