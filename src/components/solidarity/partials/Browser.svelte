<script lang="ts">
  import Avatar from "./Avatar.svelte";
  import Toggle from "./Toggle.svelte";

  import { toggleStore } from "@stores/solidarity/toggle";

  let feed = [
    {
      img: "thomas.jpeg",
      name: "Thomas Knoll",
      title: "Leading Organizational Growth...",
      post: "What do you do when you want to share an offer that sounds too good to be true? Lean into the absurdity, or shroud it in mystery? Seriously. I need advice.",
    },
    {
      img: "heather.jpeg",
      name: "Heather Binksy",
      title: "eCommerce Assistant at...",
      post: "Today marks the day I have worked at ….. for 10 years! Starting at reception and working my way up to e-Commerce Assistant.",
    },
    {
      img: "andrew.jpeg",
      name: "Andrew Love",
      title: "Professional Catalyst.",
      post: "It's never the platform, it's the people on it.",
    },
  ];
  let sidebar = [
    {
      img: "hassan.jpeg",
      name: "Hassan Archer",
      title: "Product Consultant",
    },
    {
      img: "ashley.jpeg",
      name: "Ashley Bradshaw",
      title: "Product & UX Design Lead",
    },
    {
      img: "bill.jpeg",
      name: "Bill Gates",
      title: "Jr Software developer",
    },
  ];
</script>

<section class="flex flex-col items-center justify-center gap-8">
  <Toggle />
  <div class="w-full rounded-xl shadow-lg md:max-w-7xl">
    <div
      class="header flex flex-row items-center justify-between rounded-t-xl border border-gray-300 bg-white px-6 py-4"
    >
      <div class="flex flex-row gap-4">
        <iconify-icon icon="fa7-brands:linkedin" class="text-3xl text-blue-500"></iconify-icon>
        <div class="hidden w-64 flex-row items-center rounded-full border border-gray-300 px-2 md:flex">
          <iconify-icon icon="material-symbols:search-rounded" class="text-xs"></iconify-icon>
        </div>
      </div>
      <div class="flex flex-row gap-6 md:gap-12">
        <div class="text-muted flex flex-row items-center gap-6">
          <iconify-icon icon="material-symbols:home" class="size-4 text-base"></iconify-icon>
          <iconify-icon icon="material-symbols:group" class="size-4 text-base"></iconify-icon>
          <iconify-icon icon="material-symbols:business-center" class="size-4 text-base"></iconify-icon>
          <iconify-icon icon="material-symbols:comment" class="size-4 text-base"></iconify-icon>
          <iconify-icon icon="material-symbols:notifications-unread" class="size-4 text-base"></iconify-icon>
        </div>
        <Avatar dimensions="size-6" ring={true} />
      </div>
    </div>
    <div
      class="flex h-full flex-col gap-3 overflow-clip rounded-b-xl border border-t-0 border-gray-300 bg-stone-50 px-6 pt-3 pb-6 md:flex-row"
    >
      <div class="hidden w-full flex-col gap-3 lg:flex lg:w-1/4">
        <div class="card flex flex-col gap-2">
          <Avatar ring={true} />
          <div class="flex flex-col">
            <h4>Paul Mackenzie</h4>
            <p>Visual Idiot</p>
          </div>
          <a href="https://workingon.studio" class="text-body flex flex-row items-center gap-2 text-xs font-bold">
            <img src="/logomark.svg" alt="" class="relative top-[1px]" />
            workingon.studio
          </a>
        </div>
        <div class="card flex flex-col gap-2">
          <div class="stats text-xxs text-muted flex flex-row items-center justify-between font-bold">
            <strong>Profile views</strong>
            <span>521</span>
          </div>
          <div class="stats text-xxs text-muted flex flex-row items-center justify-between font-bold">
            <strong>Profile impressions</strong>
            <span>2,756</span>
          </div>
        </div>
      </div>
      <div class="flex w-full flex-col gap-3 lg:w-2/4">
        {#each feed as { img, name, title, post }}
          <div class="card flex flex-col gap-3">
            <div class="flex flex-row items-center gap-3">
              <Avatar img={"/solidarity/avatars/" + img} dimensions="size-10" ring={$toggleStore} />
              <div class="flex flex-col">
                <h4 class="text-sm!">{name}</h4>
                <p>{title}</p>
              </div>
            </div>
            <p>{post}</p>
          </div>
        {/each}
      </div>
      <div class="hidden w-full flex-col gap-3 lg:flex lg:w-1/4">
        {#each sidebar as { img, name, title }}
          <div class="card">
            <div class="flex flex-row items-center gap-3">
              <Avatar img={"/solidarity/avatars/" + img} dimensions="size-10" ring={$toggleStore} />
              <div class="flex flex-col">
                <h4 class="text-sm!">{name}</h4>
                <p>{title}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  @reference "@styles/solidarity.css";
  .card {
    @apply rounded-xl border border-gray-200 bg-white p-4;
    h4 {
      @apply font-satoshi text-xs font-bold;
    }
    p {
      @apply text-muted text-xs;
    }
  }
</style>
