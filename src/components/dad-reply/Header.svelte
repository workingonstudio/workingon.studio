<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";
</script>

<div class="sticky top-0 z-[1000] flex border-b border-b-white/10 bg-white backdrop-blur-md">
  <header class="mx-auto mb-4 flex max-w-[1156px] flex-1 flex-row items-center justify-between py-10 text-slate-700">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center">
        <Badge text={"v1.0.0"} />
      </div>
    </div>
    <nav class="font-regular flex flex-row space-x-4 divide-x divide-slate-300 text-sm [&_a]:hover:underline">
      <ul class="flex flex-row pr-4">
        <li>
          <a href="/" class="font-medium text-blue-600">Claim early bird offer</a>
        </li>
      </ul>
      <ul class="flex flex-row space-x-4">
        <li>
          <a href="https://www.producthunt.com/products/dad-reply" target="_blank">Product Hunt</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/dadreply" target="_blank">LinkedIn</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
