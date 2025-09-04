<script lang="ts">
  export let platform: string = "Chrome";
  export let textColor: string = "text-white";
  export let bgColor: string = "bg-blue-600";
  export let bgColorHover: string = "bg-blue-700";
  export let borderColor: string = "border-transparent";
  export let icon: string = "chrome";
  export let downloadLink: string = "/";
</script>

<a
  href={downloadLink}
  class="flex text-sm p-3 border-2 rounded-lg font-semibold {bgColor} {borderColor} hover:{bgColorHover} {textColor} transition-colors duration-300 ease-in-out"
>
  <i class="fa-brands {'fa-' + icon} text-xl mr-2.5"></i>
  {"Download for " + platform}
</a>
