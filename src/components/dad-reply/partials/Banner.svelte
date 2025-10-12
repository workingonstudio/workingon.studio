<script lang="ts">
  import { submittedEmail } from "@stores/dadreply/email";

  function handleClick() {
    document.getElementById("email")?.focus();
  }
</script>

<div class="border-b border-orange-100 bg-orange-50 p-4">
  <div class="mx-auto flex max-w-6xl flex-1 flex-row items-center justify-center">
    <div class="text-text flex-inline flex items-center gap-4">
      <span class="text-2xl hover:cursor-help" title="It's a worm, like, early bird catches...you get it right?">
        🐦‍⬛
      </span>
      <span class="text-xs font-semibold sm:text-sm">
        Early bird offer : Get 33% off a yearly subscription until you die (or I do).
      </span>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
