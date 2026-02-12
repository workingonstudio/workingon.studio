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
</PageHeader>

<section class="border-surface-border divide-surface-border flex flex-col divide-y border">
  {#each financeData.entries as { date, items }}
    <div class="flex flex-col gap-6 px-16 py-12" role="table" aria-label="Financial transactions">
      <!-- Header -->
      <div class="text-xxs text-primary flex" role="rowgroup">
        <div class="flex w-full items-center" role="row">
          <h3 class="text-header w-full text-xl font-medium" role="columnheader">{date}</h3>
          <span class="w-28 text-right" role="columnheader">
            <iconify-icon icon="ph:arrow-down-right-bold" class="text-base"></iconify-icon>
          </span>
          <span class="w-28 text-right text-base" role="columnheader">
            <iconify-icon icon="ph:arrow-up-right-bold" class="text-base"></iconify-icon>
          </span>
        </div>
      </div>
      <!-- Rows -->
      <div class="finance-rows flex flex-col gap-3 text-base" role="rowgroup">
        {#each items as { description, out }}
          <div class="finance-row flex cursor-default gap-4 transition-colors duration-150 ease-in-out" role="row">
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
    @apply transition-opacity duration-200;
  }

  .finance-row:focus {
    @apply ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-950 outline-none;
  }
</style>
