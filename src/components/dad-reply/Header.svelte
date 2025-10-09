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
        <Badge text={"Pro Trial Edition"} bgColor="bg-orange-100" />
      </div>
    </div>
    <div class="flex flex-row items-center gap-2">
      <nav>
        <ul class="flex flex-row gap-4">
          <li>
            <a
              href="https://www.producthunt.com/products/dad-reply"
              aria-label="Dad Reply on Producthunt"
              title="Dad Reply on Producthunt"
              class="flex flex-row items-center gap-1 text-sm font-semibold transition-colors delay-100 hover:text-[#FF6154]"
            >
              <i class="fa-brands fa-product-hunt text-lg"></i>
              Product Hunt
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
          @apply text-xs;
        }
      }
    }
  }
</style>
