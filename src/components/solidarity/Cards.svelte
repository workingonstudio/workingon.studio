<script lang="ts">
  import { toggleStore } from "@stores/solidarity/toggle";
  import Card from "./partials/Card.svelte";

  let originalUsers = [
    {
      id: "user-1",
      src: "/solidarity/avatars/thomas.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-2",
      src: "/solidarity/avatars/ryan.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-3",
      src: "/solidarity/avatars/heather.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-4",
      src: "/solidarity/avatars/ashley.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-5",
      src: "/solidarity/avatars/me-shoe.png",
      width: 128,
      height: 128,
      overlay: true,
    },
    {
      id: "user-6",
      src: "/solidarity/avatars/dinesh.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-7",
      src: "/solidarity/avatars/rachael.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-8",
      src: "/solidarity/avatars/darrell.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      id: "user-9",
      src: "/solidarity/avatars/hassan.jpeg",
      width: 64,
      height: 64,
      overlay: false,
    },
  ];

  let isToggled = $state(false);

  $effect(() => {
    const unsubscribe = toggleStore.subscribe((value) => {
      isToggled = value;
    });
    return unsubscribe;
  });

  let users = $derived(
    originalUsers.map((user) => ({
      ...user,
      overlay: isToggled ? true : user.overlay,
    }))
  );
</script>

<div class="relative flex h-full w-full items-start justify-center">
  <div class="overlay absolute top-[-2px] z-10 min-h-[325px] w-full {isToggled ? 'expanded' : ''}"></div>
  {#each users as user, index}
    <Card {...user} itemNumber={index} />
  {/each}
</div>

<style>
  @reference "@styles/solidarity.css";
  .overlay {
    background: url("/solidarity/gradient-bg.png") center/cover no-repeat;
    background-size: 100% 100%;
    @apply bg-stone-50/10;
    transition: background-size 2000ms ease-in-out;
  }

  .overlay.expanded {
    background-size: 500% 500%;
  }
</style>
