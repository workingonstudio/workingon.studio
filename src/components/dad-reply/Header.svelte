<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";
  import Navigation from "./partials/Navigation.svelte";

  import { submittedEmail } from "@stores/dadreply/email";
</script>

<div class="sticky top-0 z-[1000] mb-2 flex w-full bg-white/80 shadow-sm shadow-white backdrop-blur-sm">
  <header class="mx-auto flex max-w-6xl flex-1 flex-col items-start md:flex-row md:items-center md:justify-between">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center gap-2">
        <Badge text={"Pro Trial Edition"} bgColor="bg-orange-100" />
        <Badge text={"v1.5.1"} />
      </div>
    </div>
    <div class="flex flex-row items-center gap-2">
      <Navigation />
    </div>
  </header>
</div>

<style>
  @reference "@styles/dad-reply.css";
  header {
    @apply px-4 py-6 lg:px-0 lg:py-10;
  }
</style>
