<script lang="ts">
  import Card from "./partials/Card.svelte";

  let users = [
    {
      name: "Thomas Knoll",
      title: "Leading growth @ Venteur.com",
      src: "https://placehold.co/40x40@2x.png",
      blurred: true,
    },
    {
      name: "Paul Mackenzie",
      title: "Founder @ workingon.studio",
      src: "https://placehold.co/40x40@2x.png",
      blurred: false,
    },
    {
      name: "Ashley Bradshaw",
      title: "Product designer",
      src: "https://placehold.co/40x40@2x.png",
      blurred: true,
    },
  ];
</script>

<div class="flex h-full w-sm flex-col">
  <div class="my-40 flex w-full flex-col gap-4">
    {#each users as user}
      <Card {...user} />
    {/each}
  </div>
</div>

<style>
</style>
