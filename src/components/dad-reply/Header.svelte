<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";
</script>

<div class="sticky top-0 z-[1000] mb-2 flex bg-white/80 shadow-sm shadow-white backdrop-blur-sm">
  <header class="mx-auto mb-4 flex max-w-6xl flex-1 flex-row items-center justify-between">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center">
        <Badge text={"v1.0.0"} />
      </div>
    </div>
    <nav class="font-regular flex flex-row space-x-4 text-sm [&_a]:hover:underline">
      <ul class="flex flex-row">
        <li>
          <a href="#earlybird" class="font-medium text-blue-600">Claim early bird offer</a>
        </li>
      </ul>
    </nav>
  </header>
</div>

<style>
  @reference "@styles/dad-reply.css";
  header {
    @apply px-4 py-6 md:px-0 md:py-10;
    ul {
      li {
        a {
          @apply text-xs;
        }
      }
    }
  }
</style>
