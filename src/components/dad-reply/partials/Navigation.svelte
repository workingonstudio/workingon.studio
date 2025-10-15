<script lang="ts">
  import Indicator from "./Indicator.svelte";

  let { isOpen = false, onClose } = $props();
  function handleClick() {
    document.getElementById("email")?.focus({ preventScroll: true });
    onClose();
  }

  function handleClose() {
    onClose();
  }
</script>

<nav class="{isOpen ? '' : 'hidden'} w-full lg:flex">
  <ul class="flex flex-col gap-0 pl-6 font-semibold md:gap-4 lg:flex-row lg:gap-6">
    <li>
      <a href="#how" onclick={handleClose}>How it works</a>
    </li>
    <li>
      <a href="#pro" onclick={handleClose}>Unlock Pro</a>
    </li>
    <li>
      <a href="#pricing" onclick={handleClose}><del>Pricing</del></a>
    </li>
    <li class="flex flex-col">
      <a
        href="#earlybird"
        onclick={handleClick}
        class="flex flex-row items-center justify-center gap-2 lg:justify-start"
      >
        <Indicator />
        Early bird offer
      </a>
    </li>
    <li>
      <a
        href="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
        class="text-blue-600 underline hover:!no-underline"
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
