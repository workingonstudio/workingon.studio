<script lang="ts">
  import { toggleStore } from "@stores/solidarity/toggle";
  import Card from "./partials/Card.svelte";

  let originalUsers = [
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "/solidarity/me-shoe.png",
      width: 128,
      height: 128,
      overlay: true,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
      overlay: false,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
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
  $effect(() => {
    console.log("Cards component - Final users overlay states:", users.map((u, i) => `${i}:${u.overlay}`).join(", "));
  });
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
    transition: background-size 3s ease-out;
  }

  .overlay.expanded {
    background-size: 200% 200%;
  }
</style>
