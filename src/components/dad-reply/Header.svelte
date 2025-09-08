<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";
</script>

<div class="flex bg-white sticky top-0 backdrop-blur-md z-[1000] border-b border-b-white/10">
  <header class="max-w-[1156px] mx-auto mb-4 flex flex-row flex-1 items-center justify-between py-10 text-slate-700">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center">
        <Badge text={"v1.0.0"} />
      </div>
    </div>
    <nav class="text-xs font-medium [&_a]:hover:underline">
      <ul class="flex flex-row space-x-3">
        <li>
          <a href="https://www.producthunt.com/products/dad-reply" target="_blank">Product Hunt</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/dadreply" target="_blank">LinkedIn</a>
        </li>
        <li class="text-slate-300">|</li>
        <li>
          <a href="/" class="text-blue-600">Claim early bird offer</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
