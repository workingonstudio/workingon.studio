<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import Footer from "@components/partials/Footer.svelte";
</script>

<div>
  <footer class="card space-y-6 p-12 shadow-lg">
    <div class="flex flex-row items-center gap-6">
      <span class="text-xl">👋</span>
      <Badge text="v1.0.0" />
    </div>
    <div class="flex flex-row">
      <div class="flex w-2xs flex-col gap-4">
        <div class="flex flex-col gap-1">
          <strong class="text-sm font-semibold">You’ve finally made it down here.</strong>
          <p class="text-xs text-slate-500">
            I can’t believe this is an actual product.
            <br />
            Yet here we are.
          </p>
        </div>
        <div class="flex-row gap-2">
          <a href="" class="transition-colors delay-100 hover:text-[#FF6154]">
            <i class="fa-brands fa-product-hunt text-lg"></i>
          </a>
          <a href="" class="transition-colors delay-100 hover:text-[#0073B1]">
            <i class="fa-brands fa-square-linkedin text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
  <div class="px-4 text-[10px] [&_a]:hover:text-blue-600">
    <Footer />
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
