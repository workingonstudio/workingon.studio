<script lang="ts">
  import Badge from "@components/dad-reply/partials/Badge.svelte";
  import DownloadButton from "./partials/DownloadButton.svelte";
  let priceTables = [
    {
      badge: {
        bgColor: "bg-blue-100",
        text: "Free",
      },
      price: {
        currency: "",
        cost: "Free",
        otherText: "",
        styles: "",
      },
      features: ["Basic button.", "Additional emoji options.", "'via Reply Dad' branding."],
      button: {
        show: false,
        icon: false,
      },
    },
    {
      badge: {
        bgColor: "bg-orange-100",
        text: "Pro trial",
      },
      price: {
        currency: "$",
        cost: 9.99,
        otherText: "per year",
        styles: "line-through",
      },
      features: [
        "Advanced multi-select button.",
        "Custom responses.",
        "<s>Remove 'via Reply Dad' branding.</s>*<small class='block ml-5 mt-1'>* not available during trial.</small>",
      ],
      button: {
        style: "hollow",
        show: true,
        iconRef: "chrome",
        icon: true,
        label: "Download for Chrome",
        downloadLink: "https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop",
      },
    },
  ];
</script>

<div class="flex flex-col items-center justify-center space-y-12">
  <div class="flex flex-col space-y-4 text-center">
    <span class="cursor-default text-4xl">🎟️</span>
    <h2>Download and get access to a Pro trial.</h2>
    <p>It’s what you always dream of as a child. Now I am giving them away*.</p>
    <small>* the pro trial that is, not a child that would be mental.</small>
  </div>
  <div class="flex w-2/3 flex-row gap-6">
    {#each priceTables as { badge: { bgColor, text }, price: { currency, cost, otherText, styles }, features, button: { style, show, icon, iconRef, label } }}
      <div
        class="flex flex-1 flex-col items-start space-y-6 rounded-[14px] border border-slate-300 bg-white p-6 transition-shadow last:shadow-lg"
      >
        <Badge {text} {bgColor} />
        <h2 class="flex flex-row items-center">
          <span class={styles}>{currency}{cost}</span>
          <span class="ml-3 text-xs font-medium">{otherText}</span>
        </h2>
        <ul class="space-y-3 text-sm font-medium">
          {#each features as feature}
            <li class="before:mr-2 before:content-['👍']">{@html feature}</li>
          {/each}
        </ul>
        {#if show}
          <DownloadButton {icon} {iconRef} style="{style} w-full" {label} />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
