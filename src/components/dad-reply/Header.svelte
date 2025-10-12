<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";

  import { submittedEmail } from "@stores/dadreply/email";

  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<div class="sticky top-0 z-[1000] mb-2 flex w-full bg-white/80 shadow-sm shadow-white backdrop-blur-sm">
  <header class="mx-auto flex max-w-6xl flex-1 flex-row items-center justify-between">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center gap-2">
        <Badge text={"v1.5.1"} />
        <Badge text={"Pro Trial Edition"} bgColor="bg-orange-100" />
      </div>
    </div>
    <div class="flex flex-row items-center gap-2">
      <nav>
        <ul class="flex flex-row gap-6 font-semibold">
          <li>
            <a href="">How it works</a>
          </li>
          <li>
            <a href="">Pro features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li class="flex flex-row items-center gap-1">
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
              Download for Chrome
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</div>

<style>
  @reference "@styles/dad-reply.css";
  header {
    @apply px-4 py-6 lg:px-0 lg:py-10;
    ul {
      li {
        a {
          @apply text-sm hover:underline;
        }
      }
    }
  }
</style>
