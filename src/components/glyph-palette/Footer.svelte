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

<footer
  class="mx-auto mt-36 flex flex-col items-start justify-between gap-6 px-4 md:max-w-6xl md:flex-row md:items-center"
>
  <section class="flex w-full flex-col gap-6 rounded-2xl bg-stone-100 p-6 md:w-4/5 md:flex-row">
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
    <div class="flex flex-1 flex-col gap-6">
      <div class="flex flex-row items-center gap-4">
        <iconify-icon icon="material-symbols:update-rounded" class="size-6 text-2xl"></iconify-icon>
        <h4>Changelog</h4>
      </div>
      <ul>
        <li>adding Phosphor icons.</li>
        <li>adding Flexsearch and improving search with tag mapping.</li>
        <li>adding replace on insert if an icon is selected on the canvas.</li>
        <li>removing labels in settings.</li>
        <li>better caching.</li>
        <li>fixing memory leaks.</li>
      </ul>
    </div>
  </section>
  <div class="flex w-full flex-col items-center gap-8 text-center md:w-auto md:items-start md:text-left">
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
        @apply items-center gap-2 rounded-lg px-2 py-1 text-sm hover:bg-blue-700;
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
