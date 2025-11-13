<script lang="ts">
  import { submittedEmail } from "@stores/dadreply/email";

  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<button
  on:click={handleClick}
  type="button"
  class="flex w-full cursor-pointer border-b border-orange-100 bg-orange-50 p-4"
>
  <div class="mx-auto flex flex-1 flex-row items-center sm:justify-center">
    <div class="text-text flex-inline flex items-center gap-4">
      <span class="text-2xl">🕊️</span>
      <span class="text-left text-xs font-semibold sm:text-sm">
        Early bird offer Get 33% off a yearly subscription until you die (or I do).
      </span>
    </div>
  </div>
</button>

<style>
  @reference "@styles/dad-reply.css";
</style>
