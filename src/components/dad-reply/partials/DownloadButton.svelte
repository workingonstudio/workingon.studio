<script lang="ts">
  export let platform: string = "Chrome Web Store";
  export let textColor: string = "text-white";
  export let bgColor: string = "bg-blue-600";
  export let bgColorHover: string = "hover:bg-blue-700";
  export let borderColor: string = "border-transparent";
  export let icon: string = "chrome";
  export let downloadLink: string = "/";
</script>

<a
  href={downloadLink}
  class="flex rounded-lg border-2 p-3 text-sm font-semibold {textColor} {bgColor} {borderColor} {bgColorHover} transition-colors duration-300 ease-in-out"
>
  <i class="fa-brands {'fa-' + icon} mr-2.5 text-xl"></i>
  {"Download for " + platform}
</a>
