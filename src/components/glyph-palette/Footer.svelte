<script lang="ts">
  import { DateTime } from "luxon";
  let date = DateTime.now().year;

  let copied = false;
  let timeoutId: any;

  async function copyEmail() {
    if (copied) return;

    try {
      await navigator.clipboard.writeText("support@workingon.studio");
      copied = true;

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  }
</script>

<footer class="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-0">
  <section class="flex w-full flex-col gap-6 rounded-2xl bg-stone-100 p-6 md:w-4/5 md:flex-row">
    <div class="flex flex-1 flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon icon="material-symbols:update-rounded" class="size-6 text-2xl"></iconify-icon>
        <h4>Changelog</h4>
      </div>
      <ul>
        <li>Initial alpha release.</li>
        <li>Browse and insert Material Symbols icons.</li>
        <li>Search functionality with instant filtering.</li>
        <li>Virtual scrolling for performance.</li>
      </ul>
    </div>
    <div class="flex flex-1 flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon icon="material-symbols:support" class="size-6 text-2xl"></iconify-icon>
        <h4>Support</h4>
      </div>
      <p>No official support as of yet. But if you find something that’s broken just let me know.</p>
      <div class="buttons flex flex-row gap-3">
        <a href="https://x.com/prmack" class="highlight flex flex-row">
          <iconify-icon icon="material-symbols:alternate-email-rounded" class="size-3.5"></iconify-icon>
          prmack
        </a>
        <button type="button" class="highlight flex cursor-pointer flex-row" title="Copy address" on:click={copyEmail}>
          <iconify-icon
            icon="material-symbols:{copied ? 'check' : 'mail-outline-rounded'}"
            class="size-3.5"
          ></iconify-icon>
          {copied ? "Copied to clipboard" : "support@workingon.studio"}
        </button>
      </div>
    </div>
  </section>
  <div class="flex flex-col gap-8">
    <a href="https://workingon.studio?ref=glyphpalette">
      <img src="/glyph-palette/logo-small-grayscale.svg" class="w-8" alt="" />
    </a>
    <div class="flex flex-col gap-2">
      <a href="#top" class="logo">glyph.palette</a>
      <small>Copywrite {date}</small>
      <a href="https://workingon.studio?ref=glyphpalette" class="text-body hover:text-text text-xs hover:underline">
        workingonstudio ltd, no: 16700615
      </a>
    </div>
  </div>
</footer>

<style>
  @reference "@styles/glyph-palette.css";
  footer {
    ul {
      li {
        @apply text-body text-sm before:mr-2 before:content-['─'];
      }
    }
    .buttons {
      a,
      button {
        @apply items-center gap-2 rounded-xl px-2 py-1 text-sm hover:bg-blue-700;
      }
    }
    @apply py-12;
    .logo {
      @apply font-cabinet-grotesk text-sm font-bold uppercase;
    }
    small {
      @apply text-xs uppercase;
    }
  }
</style>
