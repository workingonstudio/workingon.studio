<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import AdvButton from "./partials/AdvButton.svelte";
  import SectionHeader from "./partials/SectionHeader.svelte";
</script>

<div id="pro" class="flex flex-col gap-24 py-30">
  <SectionHeader emoji="🔓" header="Pro Trial unlocked." body="Get an advanced button and 3 custom Emoji replies." />
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col md:w-3/5 lg:w-2/5">
      <div class="flex flex-col gap-3 px-4 py-4">
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="h-6 w-6 text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🐛</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Bug</div>
        </div>
        <div
          class="the-shadow flex scale-110 flex-row items-center gap-3 rounded-lg border border-slate-300 bg-white p-2"
        >
          <iconify-icon icon="material-symbols:drag-indicator" class="h-7 w-auto text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🎯</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Feature</div>
        </div>
        <div class="flex flex-row items-center gap-3">
          <iconify-icon icon="material-symbols:drag-indicator" class="h-6 w-6 text-2xl"></iconify-icon>
          <button class="rounded-lg border border-slate-300 px-3 py-2">🔥</button>
          <div class="flex flex-grow rounded-lg border border-slate-300 px-2.5 py-2.5 text-sm">Critical</div>
        </div>
      </div>
    </div>
    <div class="order-first flex w-90 flex-col items-start gap-6 md:w-2/3 lg:order-0 lg:w-2/5">
      <div class="flex flex-row gap-2">
        <Badge text="More options" bgColor="bg-blue-100" />
        <Badge text="Pro trial" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Add custom Emoji.</h4>
        <p>Turn replies into actions. Tag bugs, assign features, triage support tickets - all with one click.*</p>
        <small>* you'll need to sort out the automation, obviously.</small>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col items-start gap-6 md:w-2/3 lg:w-2/5">
      <div class="flex flex-row gap-2">
        <Badge text="More control" bgColor="bg-blue-100" />
        <Badge text="Pro trial" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Advanced button.</h4>
        <p>
          Choose between your custom replies before sending. Or set it to instant - send if you're feeling decisive.*
        </p>
        <small>*One click, multiple options. Your call.</small>
      </div>
    </div>
    <div
      class="mt-20 flex w-90 flex-col gap-6 rounded-bl-xl border-b-1 border-l-1 border-gray-300 px-12 py-8 md:w-2/3 lg:w-2/5"
    >
      <div class="flex flex-col gap-1">
        <strong class="text-xs md:text-sm">Bill Lumbergh</strong>
        <small>Division Vice President</small>
      </div>
      <div class="flex flex-row items-stretch justify-start gap-4">
        <AdvButton />
        <div class="flex flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:h-9"></div>
        <div
          class="hidden flex-1 rounded-full border border-dashed border-neutral-200 bg-neutral-50/80 md:flex md:h-9"
        ></div>
      </div>
    </div>
  </div>
  <div class="flex flex-col items-center justify-center gap-12 py-12 text-pretty lg:flex-row">
    <div class="flex w-90 flex-col gap-4 md:w-3/5 lg:w-2/5">
      <div class="flex flex-col gap-4 rounded-bl-xl border-b-1 border-l-1 border-gray-300 pb-12 pl-12 lg:p-12">
        <ul class="triggerList flex flex-col gap-4">
          <li>
            <strong>If</strong>
            <div class="flex flex-row rounded-lg border border-gray-300 p-2">
              <span class="action">reply</span>
              <span>is</span>
              <span class="action">equal</span>
              <span>to</span>
              <span class="emoji">🐛</span>
            </div>
          </li>
          <li>
            <strong>Then</strong>
            <div class="flex flex-row rounded-lg border border-gray-300 p-2">
              <span class="action">Tag</span>
              <span>as</span>
              <span class="action border border-red-200! bg-red-100">Bug</span>
            </div>
          </li>
          <li>
            <strong>And</strong>
            <div class="flex flex-row rounded-lg border border-gray-300 px-2 py-2">
              <span class="action">Move</span>
              <span>to</span>
              <span class="action border border-blue-200! bg-blue-100">Backlog</span>
            </div>
          </li>
          <li>
            <strong>And</strong>
            <div class="flex flex-row rounded-lg border border-gray-300 px-2 py-2">
              <span class="action">Assign</span>
              <span>to</span>
              <span class="action border border-emerald-200! bg-emerald-100">Engineering</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="order-first flex w-90 flex-col items-start gap-6 md:w-2/3 lg:order-0 lg:w-2/5">
      <div class="flex flex-row gap-2">
        <Badge text="More focus" bgColor="bg-blue-100" />
        <Badge text="Pro trial" bgColor="bg-orange-100" />
      </div>
      <div class="flex flex-col gap-3">
        <h4>Trigger software you already use.*</h4>
        <p>Those notification emails from Jira, GitHub, Zendesk? They can finally do something useful.</p>
        <small>* or are being forced to use.</small>
      </div>
    </div>
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
  .triggerList {
    @apply text-sm;
    li {
      @apply flex flex-row items-center gap-4;
      strong {
        @apply text-text-muted w-8 text-xs uppercase;
      }
      div {
        @apply flex flex-row items-center gap-2;
        span {
          @apply text-xxs font-semibold;
          &.action {
            @apply rounded-md border border-gray-300 px-2 py-0.5;
          }
          &.emoji {
            @apply flex items-center rounded-md border border-gray-300 px-1 py-0.5;
          }
        }
      }
    }
  }
</style>
