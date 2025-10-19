<script lang="ts">
  import PageHeader from "./partials/PageHeader.svelte";
</script>

<PageHeader>
  <!-- prettier-ignore -->
  <h1>
    I'm tired of designing for metrics&#8230;tired of designing to make numbers go up&#8230;tired of playing to the wrong audience.<br/>Aren't you?
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>
      They're not customers, they’re not clients, or partners, they're people. Messy humans, with issues far greater
      than "I best get this report done".
    </p>
    <p>
      They’re humans that don’t need to be talked to like idiots. The world isn’t all sunshine and rainbows. They don’t
      need to be manipulated, told that if they just buy "this thing" their life will be complete.
    </p>
    <p>This is just a ride. And I’d rather make it the best ride, than trick them into thinking it is.</p>
    <p>
      This game is broken.
      <br />
      I’m making a new one.
    </p>
    <p>Wanna play?</p>
  </div>
</PageHeader>

<style>
  @reference "@styles/global.css";
  h1 {
    span {
      @apply before:content-["\2217\2217"];
    }
  }
</style>
