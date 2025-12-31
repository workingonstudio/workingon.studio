<script lang="ts">
</script>

<section class="flex flex-col items-center">
  <div class="flex w-full flex-col gap-12 lg:w-4xl">
    <div class="flex flex-col gap-3 text-center">
      <h2>How it works.</h2>
      <p>A LinkedIn extension that makes you feel less shit about looking for work.</p>
    </div>
    <ul>
      <li>
        <div
          class="flex w-full flex-col items-start rounded-tr-2xl rounded-bl-2xl border-t-1 border-r-1 border-gray-300 bg-stone-50"
        >
          <div
            class="flex w-full flex-row items-center gap-4 rounded-tr-2xl border-b border-gray-300 bg-white py-3 pr-6"
          >
            <div
              class="flex h-9 w-full flex-row items-center justify-end rounded-tr-full rounded-br-full border border-l-0 border-gray-300 px-3"
            >
              <iconify-icon icon="material-symbols:star-outline" class="text-xl text-gray-300"></iconify-icon>
            </div>
            <div class="flex flex-row gap-4">
              <iconify-icon icon="material-symbols:extension-outline" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:account-circle" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:more-vert" class="text-xl text-gray-500"></iconify-icon>
            </div>
          </div>
          <div class="flex w-full flex-row justify-end p-6 pb-14">
            <div class="flex flex-row rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-blue-50">
              Add to Chrome
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col gap-4 p-16">
          <iconify-icon icon="material-symbols:extension-outline" class="text-2xl text-gray-600"></iconify-icon>
          <h3>Grab the extension.</h3>
          <p>Install the latest version of the extension from the Chrome store.</p>
        </div>
      </li>
      <li>
        <div class="flex flex-col gap-4 p-12">
          <iconify-icon icon="material-symbols:open-in-new-rounded" class="text-2xl text-gray-600"></iconify-icon>
          <h3>Visit LinkedIn.</h3>
          <p>I know I know. But hold your nose. And understand the hellscape.</p>
        </div>
      </li>
      <li>
        <div class="flex flex-col gap-4 p-12">
          <iconify-icon icon="material-symbols:toggle-on-outline" class="text-2xl text-gray-600"></iconify-icon>
          <h3>Toggle the extension.</h3>
          <p>Watch as everyone in your feed, comments, and inbox now has the #opentowork ring.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<style>
  @reference "@styles/solidarity.css";
  ul {
    @apply flex flex-col gap-6;
    li {
      @apply flex flex-row items-end rounded-xl border border-gray-300 bg-white;
    }
  }
</style>
