<script lang="ts">
  import Avatar from "./partials/Avatar.svelte";
</script>

<section id="how" class="flex scroll-mt-20 flex-col items-center">
  <div class="flex w-full flex-col gap-12 lg:w-4xl">
    <div class="flex flex-col gap-3 text-center">
      <h2>How it works.</h2>
      <p>A LinkedIn extension that makes you feel less shit about looking for work.</p>
    </div>
    <ul>
      <li>
        <div
          class="order-last flex w-4/5 flex-col items-start rounded-tr-2xl rounded-bl-xl border-t-1 border-r-1 border-gray-300 bg-stone-50 md:order-none md:w-full"
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
            <a
              href="https://chromewebstore.google.com/detail/ahahliplongfboaikbajdedefpoifjeb"
              class="flex flex-row rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-blue-50"
            >
              Add to Chrome
            </a>
          </div>
        </div>
        <div class="flex w-full flex-col gap-4 p-14">
          <iconify-icon icon="material-symbols:extension-outline" class="text-2xl text-gray-600"></iconify-icon>
          <h3>Grab the extension.</h3>
          <p>Install the latest version of the extension from the Chrome store.</p>
        </div>
      </li>
      <li class="items-end!">
        <div class="flex flex-col gap-4 p-14">
          <iconify-icon icon="material-symbols:open-in-new-rounded" class="text-2xl text-gray-600"></iconify-icon>
          <h3>Visit LinkedIn.</h3>
          <p>To be fair if you're looking for work you probably already have the tab open. Right?</p>
        </div>
        <div
          class="flex w-4/5 flex-col items-start rounded-tl-2xl rounded-br-xl border-t-1 border-l-1 border-gray-300 bg-stone-50 md:w-full"
        >
          <div
            class="flex w-full flex-row items-center gap-4 rounded-tl-2xl border-b border-gray-300 bg-white py-3 pl-6"
          >
            <div class="flex flex-row gap-4">
              <iconify-icon icon="material-symbols:arrow-back" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:arrow-forward" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:refresh" class="text-xl text-gray-500"></iconify-icon>
            </div>
            <div
              class="flex h-9 w-full flex-row items-center justify-start rounded-tl-full rounded-bl-full border border-r-0 border-gray-300 px-4"
            >
              <span class="text-body text-sm">https://linkedin.com/</span>
            </div>
          </div>
          <div class="flex w-full flex-row pb-12">
            <div class="flex w-full flex-row items-center gap-4 border-b-1 border-gray-300 bg-white p-4">
              <iconify-icon icon="fa7-brands:linkedin" class="size-7.5 text-3xl text-blue-500"></iconify-icon>
              <div class="flex w-80 flex-row rounded-full border border-gray-300 px-2 py-2">
                <iconify-icon icon="material-symbols:search-rounded" class="text-muted text-sm"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div
          class="order-last flex w-4/5 flex-col items-start rounded-tr-2xl rounded-bl-xl border-t-1 border-r-1 border-gray-300 bg-stone-50 md:order-none md:w-full"
        >
          <div
            class="flex w-full flex-row items-center gap-4 rounded-tr-2xl border-b border-gray-300 bg-white py-3 pr-6"
          >
            <div
              class="flex h-9 w-full flex-row items-center justify-end rounded-tr-full rounded-br-full border border-l-0 border-gray-300 px-3"
            ></div>
            <div class="flex flex-row gap-4">
              <iconify-icon icon="material-symbols:extension-outline" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:radio-button-partial" class="text-xl text-green-700"></iconify-icon>
              <iconify-icon icon="material-symbols:account-circle" class="text-xl text-gray-500"></iconify-icon>
              <iconify-icon icon="material-symbols:more-vert" class="text-xl text-gray-500"></iconify-icon>
            </div>
          </div>
          <div class="flex w-full flex-row justify-start p-6 pb-14">
            <div
              class="flex w-full flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-4"
            >
              <div class="flex flex-row gap-3">
                <Avatar img={"/solidarity/avatars/jensen.jpeg"} ring dimensions="size-10" />
                <div class="flex flex-col text-sm">
                  <strong>Jensen Huang</strong>
                  <span class="text-muted text-xs">Dishwasher, Busboy, Waiter</span>
                </div>
              </div>
              <iconify-icon
                icon="material-symbols:person-add-outline-rounded"
                class="text-2xl text-gray-500"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 p-14">
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
    @apply flex flex-col gap-12;
    li {
      @apply flex flex-col items-start overflow-hidden rounded-xl border border-gray-300 bg-white md:flex-row md:items-end;
    }
  }
</style>
