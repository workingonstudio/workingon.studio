<script lang="ts">
  import financeData from "../data/finance.json";

  $: totalClass =
    totalIncome - totalExpenses >= 0 ? "text-green-500" : "text-red-500";

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

<div class="flex flex-col space-y-7">
  <div class="space-y-1">
    <span class="inline-flex text-gray-500 text-[11px]">Current Balance</span>
    <h3 class="text-2xl {totalClass}">{netTotal}</h3>
  </div>
  <div>
    <table class="table-auto w-full border-spacing-y-4 border-separate">
      <thead>
        <tr class="text-[11px] text-gray-500">
          <th class="text-left">Description</th>
          <th class="text-right">In</th>
          <th class="text-right">Out</th>
        </tr>
      </thead>
      <tbody class="text-sm group">
        {#each financeData.entries as item}
          <tr>
            <td>{item.description}</td>
            <td class="text-right"></td>
            <td class="text-right">-&#xA3;{item.out.toFixed(2)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  @reference "../styles/global.css";
  tbody:hover tr:not(:hover) {
    @apply text-gray-500 delay-100;
  }

  tbody tr {
    @apply transition-colors ease-in-out duration-150 cursor-default;
  }
</style>
