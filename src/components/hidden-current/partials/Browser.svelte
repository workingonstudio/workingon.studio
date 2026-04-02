<script lang="ts">
  import Overlay from "./Overlay.svelte";
  import Popover from "./Popover.svelte";
</script>

<section
  class="flex w-6xl flex-col rounded-xl rounded-br-none rounded-bl-none border border-b-0 border-gray-300 shadow-lg"
>
  <header class="rounded-tl-xl rounded-tr-xl border-b border-gray-300 bg-gray-50 p-4">
    <div class="flex flex-row gap-2">
      <span class="size-2 rounded-full bg-rose-500"></span>
      <span class="size-2 rounded-full bg-orange-400"></span>
      <span class="size-2 rounded-full bg-emerald-400"></span>
    </div>
  </header>
  <div class="relative flex flex-row gap-6 rounded-br-xl rounded-bl-xl bg-white p-12">
    <div class="flex w-full flex-col items-start justify-start">
      <span class="flex flex-col rounded-xl border border-gray-200 p-2">
        <iconify-icon icon="fa7-brands:claude" class="size-6 text-2xl text-[#C15F3C]"></iconify-icon>
      </span>
    </div>
    <div class="flex flex-col items-end">
      <div class="flex w-2/3 flex-row rounded-xl bg-gray-50 p-6 text-sm">
        <p>What's a good social media strategy for launching our new sustainable water bottle?</p>
      </div>
      <div class="flex flex-col gap-6 p-6 text-sm">
        <p>
          Focus on Instagram and TikTok with a pre-launch teaser campaign two weeks out, then partner with 3-5
          micro-influencers in the sustainability space for authentic reach during launch week. Create a branded hashtag
          and run a giveaway requiring follows and tags to maximize initial visibility, then maintain momentum with 4-5
          posts weekly mixing educational content about ocean plastic with user-generated testimonials.
        </p>
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 text-neutral-400">
            <iconify-icon icon="material-symbols:content-copy-outline" class="size-4.5 text-lg"></iconify-icon>
            <iconify-icon icon="material-symbols:thumb-up-outline" class="size-4.5 text-lg"></iconify-icon>
            <iconify-icon icon="material-symbols:thumb-down-outline" class="size-4.5 text-lg"></iconify-icon>
            <iconify-icon icon="material-symbols:refresh" class="size-4.5 text-lg"></iconify-icon>
          </div>
          <Popover header="Per prompt usage." body="See how much each prompt has used.">
            <ul class="flex flex-row gap-3 font-bold text-neutral-400">
              <li class="flex flex-row items-center gap-1">
                <iconify-icon icon="material-symbols:bolt-outline" class="size-4 text-base"></iconify-icon>
                <span class="text-xxs text-body">0.027 Wh</span>
              </li>
              <li class="flex flex-row items-center gap-1">
                <iconify-icon icon="material-symbols:water-drop-outline" class="size-4 text-base"></iconify-icon>
                <span class="text-xxs text-body">51.1 mL</span>
              </li>
            </ul>
          </Popover>
        </div>
      </div>
    </div>
    <Popover header="Running Totals." body="Keep track of estimated consumption.">
      <Overlay />
    </Popover>
  </div>
</section>
