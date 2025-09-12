<script lang="ts">
  import Icon from "@components/Icon.svelte";

  let socialButtons = [
    {
      title: "Share on Linkedin",
      iconRef: "linkedin-in",
      href: "/",
      color: "text-[#0073B1]",
    },
    {
      title: "Share on Threads",
      iconRef: "threads",
      href: "/",
      color: "text-[#0C0C0C]",
    },
    {
      title: "Share on Discord",
      iconRef: "discord",
      href: "/",
      color: "text-[#5865F2]",
    },
    {
      title: "Share on Whatsapp",
      iconRef: "whatsapp",
      href: "/",
      color: "text-[#25D366]",
    },
    {
      title: "Share on Messenger",
      iconRef: "facebook-messenger",
      href: "/",
      color: "text-[#1877F2]",
    },
    {
      title: "Share on Mastodon",
      iconRef: "mastodon",
      href: "/",
      color: "text-[#5865F2]",
    },
    {
      title: "Share on Reddit",
      iconRef: "reddit",
      href: "/",
      color: "text-[#FF4500]",
    },
  ];

  function copyLink() {}
</script>

<div class="card w-md space-y-6 shadow-lg">
  <div class="flex flex-row items-center space-x-2 text-base font-semibold">
    <Icon name="share" class_="flex text-2xl text-blue-600" />
    <span class="flex">Share this.</span>
  </div>

  <form action="" on:submit|preventDefault={copyLink} class="relative flex flex-1 flex-row justify-between">
    <label for="link" class="grow">
      <input
        id="link"
        readonly
        type="text"
        value="https://dadreply.com?UTMSource='share'"
        class="cursor-default outline-0"
      />
    </label>
    <button type="button" class="absolute top-[2px] right-0 cursor-pointer p-3 hover:*:text-blue-600">
      <Icon name="copy" class_="text-slate-400 text-xl" />
    </button>
  </form>

  <ul class="flex flex-row justify-between">
    {#each socialButtons as { title, iconRef, href, color }}
      <li>
        <a
          {href}
          {title}
          class="flex h-[41px] w-[41px] items-center rounded-lg border border-slate-300 p-2 transition delay-50 hover:shadow-lg"
        >
          <i class="fa-brands {'fa-' + iconRef} text-xl {color}"></i>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
