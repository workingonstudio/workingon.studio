<script lang="ts">
  import Card from "./partials/Card.svelte";

  let users = [
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "../../../../public/solidarity/me-shoe.png",
      width: 128,
      height: 128,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
    {
      src: "https://placehold.co/64x64@2x.png",
      width: 64,
      height: 64,
    },
  ];
</script>

<div class="relative mt-32 flex w-1/3 items-start justify-center">
  {#each users as user, index}
    <Card {...user} itemNumber={index} />
  {/each}
</div>

<style>
</style>
