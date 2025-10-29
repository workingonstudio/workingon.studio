<script lang="ts">
  import PageHeader from "@components/partials/PageHeader.svelte";

  import financeData from "../data/finance.json";

  $: totalClass = totalIncome - totalExpenses >= 0 ? "text-green-500" : "text-red-500";

  let totalIncome = financeData.entries.reduce((acc, month) => {
    return (
      acc +
      month.items.reduce((itemAcc, item) => {
        return itemAcc + item.in;
      }, 0)
    );
  }, 0);

  let totalExpenses = financeData.entries.reduce((acc, month) => {
    return (
      acc +
      month.items.reduce((itemAcc, item) => {
        return itemAcc + item.out;
      }, 0)
    );
  }, 0);

  $: netTotal =
    totalIncome - totalExpenses >= 0
      ? `£${(totalIncome - totalExpenses).toFixed(2)}`
      : `£${Math.abs(totalIncome - totalExpenses).toFixed(2)}`;
</script>

<PageHeader>
  <h1>
    Currently <span class={totalClass}>{netTotal}</span>
    in the red.
  </h1>
  <div class="flex max-w-xl flex-col gap-12">
    <p>Every penny in, every penny out. No hiding the reality of running a studio.</p>
  </div>
</PageHeader>

<section class="flex flex-col gap-7 2xl:mt-5 2xl:w-5xl">
  {#each financeData.entries as { date, items }}
    <div class="flex flex-col" role="table" aria-label="Financial transactions">
      <!-- Header -->
      <div class="text-xxs text-primary flex pb-12" role="rowgroup">
        <div class="flex w-full" role="row">
          <span class="flex-1 text-left text-3xl" role="columnheader">{date}</span>
          <span class="w-28 text-right" role="columnheader">
            <span class="h-8 w-8">
              <iconify-icon icon="carbon:arrow-down-right" class="text-3xl"></iconify-icon>
            </span>
          </span>
          <span class="w-28 text-right" role="columnheader">
            <span class="h-8 w-8">
              <iconify-icon icon="carbon:arrow-up-right" class="text-3xl"></iconify-icon>
            </span>
          </span>
        </div>
      </div>

      <!-- Rows -->
      <div class="finance-rows text-body flex flex-col text-xl" role="rowgroup">
        {#each items as { description, out }}
          <div class="finance-row flex cursor-default pb-4 transition-colors duration-150 ease-in-out" role="row">
            <span class="flex-1 truncate" role="cell">{description}</span>
            <span class="w-28 text-right" role="cell"></span>
            <span class="w-28 text-right" role="cell">-£{out.toFixed(2)}</span>
          </div>
        {/each}
      </div>
    </div>
  {/each}
</section>

<style>
  @reference "../styles/main.css";
  .finance-rows:hover .finance-row:not(:hover) {
    @apply opacity-40 delay-100;
  }

  .finance-rows:hover {
    @apply text-primary;
  }

  .finance-row:not(:hover) {
    @apply text-body delay-100;
  }

  .finance-row {
    @apply text-sm transition-opacity duration-200 md:text-base lg:text-xl;
  }

  .finance-row:focus {
    @apply ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-950 outline-none;
  }
</style>
