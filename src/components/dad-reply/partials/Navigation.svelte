<script lang="ts">
  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<nav>
  <ul class="flex flex-col gap-0 pl-6 font-semibold md:flex-row md:gap-6">
    <li>
      <a href="#how">How it works</a>
    </li>
    <li>
      <a href="#pro">Unlock Pro</a>
    </li>
    <li>
      <a href="#pricing">Pricing</a>
    </li>
    <li class="flex flex-row items-center gap-2">
      <span class="relative h-1.5 w-1.5 rounded-full bg-blue-600">
        <span class="absolute h-1.5 w-1.5 rounded-full bg-blue-600 motion-safe:animate-ping"></span>
      </span>
      <a href="" on:click|preventDefault={handleClick}>Early bird offer</a>
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
      @apply my-3 md:my-0;
      li {
        @apply flex;
        a {
          @apply text-sm hover:underline;
          @apply py-3 md:py-0;
        }
      }
    }
  }
</style>
