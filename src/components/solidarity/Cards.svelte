<script lang="ts">
  import Card from "./partials/Card.svelte";

  let users = [
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
</script>

<div class="relative flex h-full w-full items-start justify-center">
  <div class="overlay absolute top-[-2px] z-10 min-h-[325px] w-full"></div>
  {#each users as user, index}
    <Card {...user} itemNumber={index} />
  {/each}
</div>

<style>
  @reference "@styles/solidarity.css";
  .overlay {
    background: url("/solidarity/gradient-bg.png") center/cover no-repeat;
  }
</style>
