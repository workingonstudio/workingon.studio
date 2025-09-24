<script lang="ts">
  import financeData from "../data/finance.json";

  $: totalClass = totalIncome - totalExpenses >= 0 ? "text-green-500" : "text-red-500";

  let totalIncome = financeData.entries.reduce((acc, currentItem) => {
    return acc + currentItem.in;
  }, 0);

  let totalExpenses = financeData.entries.reduce((acc, currentItem) => {
    return acc + currentItem.out;
  }, 0);

  $: netTotal =
    totalIncome - totalExpenses >= 0
      ? `£${(totalIncome - totalExpenses).toFixed(2)}`
      : `-£${Math.abs(totalIncome - totalExpenses).toFixed(2)}`;
</script>

<section class="flex max-w-md flex-col space-y-7">
  <div class="space-y-1">
    <span class="text-xxs inline-flex text-gray-500">Current Balance</span>
    <h3 class="font-nudciaMono text-2xl {totalClass}">{netTotal}</h3>
  </div>

  <div class="flex flex-col" role="table" aria-label="Financial transactions">
    <!-- Header -->
    <div class="text-xxs flex pb-2 text-gray-500" role="rowgroup">
      <div class="flex w-full" role="row">
        <span class="flex-1 text-left" role="columnheader">Description</span>
        <span class="w-28 text-right" role="columnheader">In</span>
        <span class="w-28 text-right" role="columnheader">Out</span>
      </div>
    </div>

    <!-- Rows -->
    <div class="finance-rows flex flex-col text-sm" role="rowgroup">
      {#each financeData.entries as item}
        <div class="finance-row flex cursor-default pb-4 transition-colors duration-150 ease-in-out" role="row">
          <span class="flex-1" role="cell">{item.description}</span>
          <span class="w-28 text-right" role="cell"></span>
          <span class="w-28 text-right" role="cell">-£{item.out.toFixed(2)}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @reference "../styles/global.css";
  .finance-rows:hover .finance-row:not(:hover) {
    @apply text-gray-500 delay-100;
  }

  .finance-row:focus {
    @apply ring-2 ring-blue-500 ring-offset-2 ring-offset-gray-950 outline-none;
  }
</style>
