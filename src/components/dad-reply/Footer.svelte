<script lang="ts">
  import Emoji from "./partials/Emoji.svelte";
  import Badge from "./partials/Badge.svelte";
  import Footer from "@components/partials/Footer.svelte";
</script>

<div>
  <footer class="card space-y-6 p-6 shadow-lg md:p-12">
    <div class="flex flex-row items-center gap-6">
      <Emoji class_="text-xl" emoji="👋" />
      <Badge text="v1.5.0" />
    </div>
    <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-0">
      <div class="flex w-2xs flex-col gap-4">
        <div class="flex flex-col gap-1">
          <strong>You’ve finally made it down here.</strong>
          <p>
            I can’t believe this is an actual product.
            <br />
            Yet here we are.
          </p>
        </div>
        <div class="hidden flex-row gap-2 md:flex">
          <a
            href="https://www.producthunt.com/products/dad-reply"
            aria-label="Dad Reply on Producthunt"
            title="Dad Reply on Producthunt"
            class="hover:text-[#FF6154]"
          >
            <i class="fa-brands fa-product-hunt text-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/dadreply/"
            aria-label="Dad Reply on Linkedin"
            title="Dad Reply on Linkedin"
            class="hover:text-[#0073B1]"
          >
            <i class="fa-brands fa-square-linkedin text-lg"></i>
          </a>
        </div>
      </div>
      <ul class="space-y-3 md:space-y-2">
        <li>
          <iconify-icon icon="material-symbols:support" class="mr-2"></iconify-icon>
          <a href="mailto:support@workingon.studio">Support</a>
        </li>
        <li>
          <iconify-icon icon="material-symbols:encrypted-outline-rounded" class="mr-2"></iconify-icon>
          <a href="/projects/dad-reply/privacy/">Privacy policy</a>
        </li>
        <li>
          <iconify-icon icon="material-symbols:signature-rounded" class="mr-2"></iconify-icon>
          <a href="/projects/dad-reply/terms/">Terms of service</a>
        </li>
        <li>
          <iconify-icon icon="material-symbols:cognition-outline-rounded" class="mr-2"></iconify-icon>
          <a href="/">workingon.studio</a>
        </li>
      </ul>
    </div>
  </footer>
  <div class="px-0 text-[10px] md:px-4 [&_a]:hover:!text-blue-600">
    <Footer />
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  strong {
    @apply text-sm font-semibold;
  }
  p {
    @apply text-xs text-slate-500;
  }
  a {
    @apply transition-colors delay-100;
  }
  ul {
    li {
      @apply flex flex-row gap-1 hover:text-blue-600;
      a {
        @apply text-xs;
      }
    }
  }
</style>
