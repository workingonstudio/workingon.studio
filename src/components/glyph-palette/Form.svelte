<script lang="ts"></script>

<div class="form">
  <form action="" class="flex flex-row gap-3">
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
    @apply w-full rounded-xl border border-gray-300 bg-white p-3 shadow-lg lg:w-xl;
    label {
      @apply rounded-lg border border-gray-300 px-3 focus-within:border-blue-500;
      input {
        @apply h-fit w-full py-2 outline-none;
      }
    }
    button {
      @apply bg-primary rounded-md border-2 border-transparent px-4 py-2 text-base font-bold transition-colors duration-250;
      &:hover {
        @apply text-text cursor-pointer border-2 border-orange-300 bg-white;
      }
    }
  }
</style>
