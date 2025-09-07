import { writable, derived } from "svelte/store";
import financeData from "../data/finance.json";

export const financeEntries = writable(financeData.entries);

export const totals = derived(financeEntries, ($entries) => {
  const totalIncome = $entries.reduce((acc, item) => acc + item.in, 0);
  const totalExpenses = $entries.reduce((acc, item) => acc + item.out, 0);
  const rawNet = totalIncome - totalExpenses;

  return {
    income: totalIncome,
    expenses: totalExpenses,
    rawNet,
    formatted:
      rawNet >= 0
        ? `£${rawNet.toFixed(2)}`
        : `-£${Math.abs(rawNet).toFixed(2)}`,
    isPositive: rawNet >= 0,
  };
});
