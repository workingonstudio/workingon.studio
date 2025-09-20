<script lang="ts">
  import Badge from "./partials/Badge.svelte";

  import { createForm } from "felte";
  import { validator } from "@felte/validator-zod";
  import * as zod from "zod";

  const apiKey = import.meta.env.LS_API_KEY;

  const fetchConfig = {
    method: "POST",
    headers: {
      content: "application/json",
      Authorization: "Bearer" + apiKey,
    },
  };

  let submitted = false;

  const schema = zod.object({
    email: zod.string().email().nonempty(),
  });

  const { form, isSubmitting, isValid, data } = createForm({
    extend: validator({ schema }),
    onSubmit: async (values) => {
      const response = await fetch("https://api.lemonsqueezy.com/v1/customers", {
        method: "POST",
        headers: {
          content: "application/json",
          Authorization: "",
        },
        body: JSON.stringify({
          data: {
            type: "customers",
            attributes: {
              email: values.email,
            },
          },
        }),
      });
      submitted = true;
    },
  });
</script>

<div id="earlybird" class="flex flex-col">
  {#if !$isSubmitting && !submitted}
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
            <input id="email" name="email" type="email" placeholder="Email address..." class="custom-outline" />
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
  {:else if submitted}
    <div class="my-16 flex flex-col justify-center space-y-3 text-center">
      <span class="cursor-default text-4xl">🪿</span>
      <h3>Check your email you silly goose.</h3>
      <p>
        Confirmation email just sent to <span class="font-mono text-slate-700">{$data.email}</span>
      </p>
      <small>
        * could be in spam amongst all those <em>other</em>
        emails.
      </small>
    </div>
  {/if}
</div>

<style>
  @reference "@styles/dad-reply.css";
</style>
