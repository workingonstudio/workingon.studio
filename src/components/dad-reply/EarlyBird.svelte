<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import { submittedEmail } from "@stores/dadreply/email";

  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import * as zod from "zod";

  const schema = zod.object({
    email: zod.string().email().nonempty(),
  });

  const { form, isSubmitting, isValid, data, errors } = createForm({
    extend: validator({ schema }),
    onSubmit: async (values) => {
      try {
        const formBody =
          "source=homepage&mailingLists=cmfulrm772g6y0iy1bkhxbqez&email=" + encodeURIComponent(values.email);

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

        submittedEmail.set({ submitted: true, email: values.email });

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
        <span class="cursor-default text-4xl">🪱</span>
        <h2>Early bird offer!</h2>
        <p>For a limited time, and to say thank you. You can claim a lifetime license to Dad Reply*.</p>
        <small>* you'll receive a code when v1.5 launches.</small>
      </div>
      <div class="card w-full space-y-6 shadow-lg md:w-md">
        <div class="space-y-8">
          <div class="flex flex-row space-x-3">
            <Badge text="Lifetime Pro" bgColor="bg-orange-100" />
            <Badge text="Limited" bgColor="bg-blue-100" />
          </div>
          <h1 class="text-5xl!">$19.99</h1>
          <ul class="space-y-3 text-sm font-medium">
            <li class="before:mr-2 before:content-['👍']">Lifetime licence to Pro.</li>
            <li class="before:mr-2 before:content-['👍']">Access to Beta features.</li>
          </ul>
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
    <div class="my-16 flex flex-col justify-center space-y-3 text-center">
      <span class="cursor-default text-4xl">🥳</span>
      <h3>Cliché celebration emoji.</h3>
      <p>
        You're email <strong class="text-slate-700">{$submittedEmail.email}</strong>
        has been added to the early bird list.
      </p>
      <small>
        * in case you forgot, that's $19.99 all in. Let's just hope when I am ready to launch it doesn't go to spam.
      </small>
    </div>
  {/if}
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
