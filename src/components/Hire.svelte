<script lang="ts">
  import PageHeader from "./partials/PageHeader.svelte";
</script>

<PageHeader>
  <h1>Currently available for consultancy gigs. You know, you pay me £500/day*. I tell you what to do.</h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>
      Whether you take my advice is entirely up to you. I don’t care. I’ll be riding into the sunset with a sack of
      money.
    </p>
    <small class="text-body flex flex-row gap-1">
      <span class="text-xl">*</span>
      <span>
        Each time you visit this page my day rate increases by £10.
        <br />
        If it takes you too long to decide anything this is your punishment.
      </span>
    </small>
  </div>
</PageHeader>

<section class="mb-10 max-w-2xl space-y-4 lg:mx-2">
  <a class="flex flex-col gap-4" href="mailto:hello.luckily704@passmail.com">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center">
      <iconify-icon icon="carbon:mail-all" class="text-3xl text-gray-500" />
      <span>hello.luckily704@passmail.com</span>
    </div>
    <p class="text-sm lg:ml-14">
      This will forward to my inbox.
      <br />
      You think I’m just gonna put it here for bots to grab.
    </p>
  </a>
</section>

<style>
  @reference "@styles/global.css";
  a {
    span {
      @apply text-primary text-lg underline lg:text-3xl;
    }
    &:hover {
      span {
        @apply no-underline;
      }
    }
  }
</style>
