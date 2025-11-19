<script lang="ts"></script>

<div class="form">
  <div class="flex flex-col gap-2">
    <h3>Join the Alpha</h3>
    <p>
      It’s not a $1000 course thing. It’s a “help me make the product better thing.” Join, get updates, and download the
      latest alpha.
    </p>
  </div>
  <form action="" class="flex flex-col gap-3 md:flex-row">
    <label for="email" class="flex flex-1 flex-row items-center gap-3">
      <iconify-icon icon="material-symbols:mail-outline-rounded" class="text-text"></iconify-icon>
      <input type="email" id="email" />
    </label>
    <button type="submit">Join alpha</button>
  </form>
</div>

<style>
  @reference "@styles/glyph-palette.css";
  .form {
    @apply flex w-full flex-col gap-6 rounded-xl bg-stone-100 p-6 lg:w-xl;
    h3 {
      @apply font-satoshi text-xl font-bold;
    }
    p {
      @apply text-gray-500;
    }
    label {
      @apply rounded-lg border border-gray-300 bg-white px-3 focus-within:border-blue-500;
      input {
        @apply h-fit w-full py-2 outline-none;
      }
    }
    button {
      @apply bg-primary rounded-md border-2 border-transparent px-4 py-2 text-base font-bold transition-colors duration-250;
      &:hover {
        @apply text-text cursor-pointer bg-gray-200;
      }
    }
  }
</style>
