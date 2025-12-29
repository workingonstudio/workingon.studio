<script lang="ts">
</script>

<section class="flex flex-col items-center">
  <div class="flex w-full flex-col gap-12 lg:w-lg">
    <div class="flex flex-col gap-3 text-center">
      <h2>How it works.</h2>
      <p class="text-xl">A LinkedIn extension that makes you feel less shit about looking for work.</p>
    </div>
    <ul>
      <li>
        <iconify-icon icon="material-symbols:extension-outline" class="text-2xl text-gray-600"></iconify-icon>
        <h3>Grab the extension.</h3>
        <p>Install the latest version of the extension from the Chrome store.</p>
      </li>
      <li>
        <iconify-icon icon="material-symbols:open-in-new-rounded" class="text-2xl text-gray-600"></iconify-icon>
        <h3>Visit LinkedIn.</h3>
        <p>I know I know. But hold your nose. And understand the hellscape.</p>
      </li>
      <li>
        <iconify-icon icon="material-symbols:toggle-on-outline" class="text-2xl text-gray-600"></iconify-icon>
        <h3>Toggle the extension.</h3>
        <p>Watch as everyone in your feed, comments, and inbox now has the #opentowork ring.</p>
      </li>
    </ul>
  </div>
</section>

<style>
  @reference "@styles/solidarity.css";
  ul {
    @apply flex flex-col gap-6;
    li {
      @apply flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-12;
    }
  }
</style>
