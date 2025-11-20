<script lang="ts">
  import Indicator from "./Indicator.svelte";

  let { isOpen = false, onClose } = $props();
  function handleClose() {
    onClose();
  }
</script>

<nav class="{isOpen ? '' : 'hidden'} w-full lg:flex">
  <ul class="flex flex-col gap-0 pl-0 font-semibold md:gap-4 md:pl-6 lg:flex-row lg:gap-6">
    <li>
      <a href="#how" onclick={handleClose}>How it works</a>
    </li>
    <li>
      <a href="#pro" onclick={handleClose} class="flex flex-row items-center justify-center gap-2 lg:justify-start">
        <Indicator />
        Pro trial
      </a>
    </li>
    <li>
      <a href="#pricing" onclick={handleClose}>Pricing</a>
    </li>
    <li>
      <a
        href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
        class="text-blue-600 underline hover:!no-underline"
        data-umami-event="clicked-install-header"
      >
        Add to Chrome
      </a>
    </li>
  </ul>
</nav>

<style>
  @reference "@styles/dad-reply.css";
  nav {
    ul {
      @apply my-3 lg:my-0;
      li {
        @apply flex w-full lg:w-fit;
        a {
          @apply text-sm hover:underline;
          @apply w-full text-center lg:w-fit lg:text-left;
          @apply py-3 lg:py-0;
        }
      }
    }
  }
</style>
