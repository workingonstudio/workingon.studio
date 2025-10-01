<script>
  import Logo from "./partials/Logo.svelte";
  import Badge from "./partials/Badge.svelte";

  import { submittedEmail } from "@stores/dadreply/email";

  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<div class="sticky top-0 z-[1000] mb-2 flex bg-white/80 shadow-sm shadow-white backdrop-blur-sm">
  <header class="mx-auto flex max-w-6xl flex-1 flex-row items-center justify-between">
    <div class="flex flex-row space-x-6">
      <Logo />
      <div class="inline-flex items-center">
        <Badge text={"v1.0.0"} />
      </div>
    </div>
    <nav class="font-regular flex flex-row space-x-4 text-sm [&_a]:hover:underline">
      <ul class="flex flex-row">
        <li>
          {#if $submittedEmail.submitted}
            <a href="#earlybird" class="font-medium text-slate-400">Offer claimed!</a>
          {:else}
            <a href="/" class="font-medium text-blue-600" on:click|preventDefault={handleClick}>
              Claim early bird offer
            </a>
          {/if}
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
