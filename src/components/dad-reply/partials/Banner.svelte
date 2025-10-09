<script lang="ts">
  import { submittedEmail } from "@stores/dadreply/email";

  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<div class="border-b border-orange-100 bg-orange-50 p-4">
  <div class="mx-auto flex max-w-6xl flex-1 flex-row items-center justify-between">
    <div class="text-text flex-inline flex items-center gap-4">
      <span class="text-lg hover:cursor-help" title="It's a worm, like, early bird catches...you get it right?">
        🪱
      </span>
      <span class="text-xs font-semibold sm:text-sm">
        Early bird offer : Get 33% off a yearly subscription until you die (or I do).
      </span>
    </div>
    <!-- prettier-ignore -->
    <button
      type="button"
      on:click|preventDefault={handleClick}
      class="text-primary cursor-pointer text-xs font-semibold underline hover:no-underline whitespace-nowrap"
    >
      Claim <span class="hidden md:inline">early bird</span> offer
    </button>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
