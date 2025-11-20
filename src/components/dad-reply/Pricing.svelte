<script lang="ts">
  import Badge from "@components/dad-reply/partials/Badge.svelte";
  import DownloadButton from "./partials/DownloadButton.svelte";
  import Emoji from "./partials/Emoji.svelte";
  import SectionHeader from "./partials/SectionHeader.svelte";
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
      features: ["Basic button.", "Additional emoji options.", "'via Dad Reply' branding."],
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
        cost: 29.99,
        otherText: "per year",
        styles: "line-through",
      },
      features: [
        "Advanced multi-select button.",
        "Custom responses.",
        "<s>Remove 'via Dad Reply' branding.</s>*<small class='block ml-5 mt-1'>* not available during trial.</small>",
      ],
      button: {
        style: "hollow",
        show: true,
        iconRef: "chrome",
        icon: true,
        label: "Add to Chrome",
        downloadLink: "https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop",
      },
    },
  ];
</script>

<div id="pricing" class="flex flex-col items-center justify-center space-y-12 py-30 md:items-center">
  <SectionHeader
    emoji="🎟️"
    header="Download and get access to a Pro trial."
    body="Until I figure out payments, you get to trial the Pro features.*"
    hasFootnote
    footnote="Technically, if I die before that happens, free stuff for you!"
  />
  <div class="flex w-full flex-col gap-6 md:flex-row lg:w-4/5">
    {#each priceTables as { badge: { bgColor, text }, price: { currency, cost, otherText, styles }, features, button: { style, show, icon, iconRef, label } }}
      <div
        class="flex flex-1 flex-col items-start space-y-6 rounded-[14px] border border-slate-300 bg-white p-6 transition-shadow last:shadow-lg"
      >
        <Badge {text} {bgColor} />
        <h2 class="flex flex-row items-center">
          <span class={styles + " text-4xl!"}>{currency}{cost}</span>
          <span class="ml-3 text-xs font-medium">{otherText}</span>
        </h2>
        <ul class="space-y-3 text-sm font-medium">
          {#each features as feature}
            <li><Emoji class_="mr-2" emoji="👍" />{@html feature}</li>
          {/each}
        </ul>
        {#if show}
          <DownloadButton
            {icon}
            {iconRef}
            style="{style} w-full"
            {label}
            downloadLink="https://chromewebstore.google.com/detail/ddkeoflblemlolckmnhihhabplfmogop"
            position="pricing"
          />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
