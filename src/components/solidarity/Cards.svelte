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
      src: "/solidarity/avatars/andrew.jpeg",
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
    position: relative;
    background: radial-gradient(circle at center, transparent 0%, oklch(98.5% 0.001 106.423) 50%);
    background-position: center;
    background-size: 110% 110%;
    transition: background-size 700ms cubic-bezier(0.95, 0.05, 0.795, 0.035);
  }

  .overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  .overlay.expanded {
    background-size: 400% 400%;
  }
</style>
