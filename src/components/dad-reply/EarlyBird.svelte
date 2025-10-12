<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import { submittedEmail } from "@stores/dadreply/email";

  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import * as zod from "zod";

  const schema = zod.object({
    email: zod.string().email().nonempty(),
    website: zod.string().max(0),
  });

  function resubmitEmail() {
    submittedEmail.reset();
  }

  const { form, isSubmitting, isValid, data, errors } = createForm({
    extend: validator({ schema }),
    onSubmit: async (values) => {
      try {
        const formBody =
          "source=website&" +
          "userGroup=earlybird&" +
          "product=" +
          encodeURIComponent("Dad Reply") +
          "&" +
          "mailingLists=cmfulrm772g6y0iy1bkhxbqez&" +
          "email=" +
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

        submittedEmail.set({
          submitted: true,
          email: values.email,
          claimed: true,
        });

        return { success: true };
      } catch (error) {
        console.error("Form submission error:", error);
        throw error;
      }
    },
  });
</script>

<div id="earlybird" class="flex flex-col">
  {#if !$isSubmitting && !$submittedEmail.submitted}
    <div class="flex flex-col items-center justify-center gap-12 md:flex-row">
      <div class="flex w-full flex-col space-y-4 md:w-md">
        <span class="cursor-default text-4xl">🐦‍⬛</span>
        <h2>Early bird offer!</h2>
        <p class="text-pretty">
          If I ever do get payments sorted, I'll send you a discount code for 33% off a yearly subscription, for life*.
        </p>
        <small>* mine or yours, makes no difference.</small>
      </div>
      <div class="card w-full space-y-6 shadow-lg md:w-md">
        <div class="space-y-8">
          <div class="flex flex-row space-x-3">
            <Badge text="Lifetime discount" bgColor="bg-orange-100" />
            <Badge text="33% off" bgColor="bg-blue-100" />
          </div>
          <div class="flex flex-row items-center gap-2">
            <h1 class="text-5xl!">$19.99</h1>
            <span class="ml-3 text-xs font-medium">per year</span>
          </div>
        </div>
        <form use:form class="space-y-5">
          <label class="flex" for="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address..."
              autocomplete="email"
              class="custom-outline"
            />
          </label>
          <label for="website" class="absolute left-[-9999999px]">
            <input type="text" id="website" name="website" autocomplete="off" tabindex="-1" />
          </label>
          <button type="submit" class="btn solid w-full" disabled={!$isValid}>Claim offer</button>
        </form>
      </div>
    </div>
  {:else if $isSubmitting}
    <div class="my-16 flex flex-col justify-center space-y-3 text-center">
      <span class="cursor-default text-4xl">🕵️‍♂️</span>
      <h3>Hold on...</h3>
      <p>Just checking that email.</p>
      <span class="flex flex-1 items-center justify-center">
        <iconify-icon
          icon="material-symbols:progress-activity"
          class="animate-spin text-2xl text-slate-400"
        ></iconify-icon>
      </span>
    </div>
  {:else if $submittedEmail.submitted}
    <div class="my-16 flex flex-col items-center justify-center text-center">
      <div class="flex w-full flex-col items-center space-y-3 md:w-2/3">
        <span class="cursor-default text-4xl">🥳</span>
        <h3>Cliché celebration emoji.</h3>
        <p>
          A confirmation email has been sent to <strong class="text-slate-700">{$submittedEmail.email}</strong>
          click the link to confirm your subscription (be sure to check SPAM).*
        </p>
        <small>* when the trial ends you'll be sent a discount code, $19.99 per year (33.3% discount).</small>
        <button
          on:click|preventDefault={resubmitEmail}
          type="button"
          class="inline-flex cursor-pointer text-xs font-normal text-blue-600 underline"
        >
          Wrong email? Need to resubmit?
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
