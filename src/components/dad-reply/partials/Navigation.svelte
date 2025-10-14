<script lang="ts">
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
      <a href="#how" on:click={handleClose}>How it works</a>
    </li>
    <li>
      <a href="#pro" on:click={handleClose}>Unlock Pro</a>
    </li>
    <li>
      <a href="#pricing" on:click={handleClose}>Pricing</a>
    </li>
    <li class="flex flex-col">
      <a
        href="#earlybird"
        on:click={handleClick}
        class="flex flex-row items-center justify-center gap-2 lg:justify-start"
      >
        <span class="relative h-1.5 w-1.5 rounded-full bg-blue-600">
          <span class="absolute left-0 h-1.5 w-1.5 rounded-full bg-blue-600 motion-safe:animate-ping"></span>
        </span>
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
