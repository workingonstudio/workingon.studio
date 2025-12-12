<script lang="ts">
  import Icon from "@components/glyph-palette/Icon.svelte";
  import Badge from "@components/glyph-palette/Badge.svelte";
  import timeline from "@data/glyph-palette/timeline.json";
</script>

<section id="roadmap">
  <div class="flex flex-col gap-12">
    <div class="flex flex-col gap-6">
      <Icon icon="route-outline" />
      <div class="flex flex-col gap-6">
        <h2>Roadmap.</h2>
        <p class="text-xl">Conception, current state, and what the future holds.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each timeline as { label, title, description, features, current }}
        <div class="entry {current ? 'current' : ''}">
          <Badge {label} type={current ? "highlight" : "bg-stone-200"} />
          <div class="flex flex-col gap-1">
            <h5>{title}</h5>
            {#if description != ""}
              <p>{description}</p>
            {/if}
            {#if features.length != 0}
              <ul class="text-body flex w-full flex-col gap-0.5 text-sm">
                {#each features as item}
                  <li>{item}</li>
                {/each}
              </ul>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @reference "@styles/glyph-palette.css";
  .entry {
    @apply flex flex-col items-start gap-3 rounded-2xl bg-stone-100 p-6;
    h5 {
      @apply font-semibold;
    }
    p {
      @apply text-sm;
    }
    li {
      @apply before:mr-1 before:content-['─'];
    }
    &.current {
      @apply bg-blue-100;
      h5 {
        @apply text-blue-950;
      }
      p,
      li {
        @apply text-blue-900;
      }
    }
  }
</style>
