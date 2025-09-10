<script lang="ts">
  import Badge from "./partials/Badge.svelte";
  import Icon from "@components/Icon.svelte";

  let isSubmitting: boolean = false;
  let success: boolean = false;

  function handleSubmit() {
    isSubmitting = true;
    setTimeout(() => {
      success = true;
    }, 1000);
  }
</script>

<div id="earlybird" class="flex flex-col">
  {#if !isSubmitting}
    <div class="flex flex-row items-center justify-center gap-12">
      <div class="flex w-md flex-col space-y-4">
        <span class="cursor-default text-4xl">🪱</span>
        <h2>Early bird offer!</h2>
        <p>It’s what you always dream about as a child. Now I am giving them away*.</p>
        <small>* the pro trial that is, not a child that would be mental.</small>
      </div>
      <div class="card w-md space-y-6 shadow-lg">
        <div class="space-y-8">
          <div class="flex flex-row space-x-3">
            <Badge text="Lifetime Pro" bgColor="bg-orange-100" />
            <Badge text="Limited" bgColor="bg-blue-100" />
          </div>
          <h1 class="text-5xl">$19.99</h1>
          <ul class="space-y-3 text-sm font-medium">
            <li class="before:mr-2 before:content-['👍']">Lifetime licence to Pro.</li>
            <li class="before:mr-2 before:content-['👍']">Access to Beta features.</li>
          </ul>
        </div>
        <form on:submit|preventDefault={handleSubmit} class="space-y-5">
          <label class="flex" for="email">
            <input id="email" type="email" placeholder="Email address..." class="custom-outline" />
          </label>
          <button type="submit" class="btn solid w-full">Claim offer</button>
        </form>
      </div>
    </div>
  {:else if !success}
    <div class="my-16 flex flex-col justify-center space-y-3 text-center">
      <span class="cursor-default text-4xl">🕵️‍♂️</span>
      <h3>Hold on...</h3>
      <p>Just checking that email.</p>
      <span class="flex flex-1 items-center justify-center">
        <Icon name="progress" class_="text-2xl text-slate-400 animate-spin" />
      </span>
    </div>
  {:else if success && isSubmitting}
    <div class="my-16 flex flex-col justify-center space-y-3 text-center">
      <span class="cursor-default text-4xl">🪿</span>
      <h3>Check your email you silly goose.</h3>
      <p>
        Confirmation email just sent to <span class="font-mono text-slate-700">paul@workingon.studio</span>
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
