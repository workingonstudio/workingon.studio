<script lang="ts">
  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import * as zod from "zod";

  let submitted: boolean = false;
  let submittedEmail: string = "";

  const schema = zod.object({
    email: zod.string().email().nonempty(),
    website: zod.string().max(0),
  });

  const { form, isSubmitting, isValid, data, errors } = createForm({
    extend: validator({ schema }),
    onSubmit: async (values) => {
      try {
        const formBody =
          "source=website" +
          "&userGroup=alpha" +
          "&mailingLists=" +
          encodeURIComponent("cmi7nrc0699o50i04blzx5unt") +
          "&email=" +
          encodeURIComponent(values.email);
        const response = await fetch("https://app.loops.so/api/newsletter-form/cmftqf9fn3f4nxp0i7l9sd1t0", {
          method: "POST",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || `Subscription failed: ${response.status}`);
        }
        submitted = true;
        submittedEmail = values.email;
      } catch (error) {
        console.error("Form submission error:", error);
        throw error;
      }
    },
  });
</script>

<div class="form">
  {#if !submitted}
    <div class="flex flex-col gap-2">
      <h3>Join the Alpha</h3>
      <p>
        It’s not a $1000 course thing. It’s a “help me make the product better thing.” Join, get updates, and download
        the latest alpha.
      </p>
    </div>
    <form use:form class="flex flex-col gap-3 md:flex-row">
      <label for="email" class="flex flex-1 flex-row items-center gap-3">
        {#if !$isValid}
          <iconify-icon icon="material-symbols:mail-outline-rounded" class="text-text"></iconify-icon>
        {:else if $isSubmitting}
          <iconify-icon icon="material-symbols:progress-activity" class="text-text animate-spin"></iconify-icon>
        {:else}
          <iconify-icon icon="material-symbols:check-circle-rounded" class="text-green-600"></iconify-icon>
        {/if}
        <input type="email" id="email" name="email" autocomplete="email" />
      </label>
      <label for="website" class="absolute left-[-9999999px]">
        <input type="text" id="website" name="website" autocomplete="off" tabindex="-1" />
      </label>
      <button type="submit" disabled={!$isValid}>Join alpha</button>
    </form>
  {:else}
    <div class="flex flex-col gap-2">
      <h3>Thanks for signing up.</h3>
      <p>
        Check your email, inc. spam, you'll need to confirm your address. You'll then get a link to the Alpha build.
      </p>
    </div>
  {/if}
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
      @apply bg-primary rounded-md border-2 border-transparent px-4 py-2 text-sm font-bold transition-colors duration-250;
      &:hover {
        @apply cursor-pointer bg-orange-400 text-white;
      }
      &:disabled {
        @apply cursor-default bg-gray-200 text-gray-500;
      }
    }
  }
</style>
