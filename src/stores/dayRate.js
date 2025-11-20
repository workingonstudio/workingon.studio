// src/stores/dayRate.js
import { writable } from "svelte/store";

function createDayRateStore() {
  // Check if we're in the browser
  const isBrowser = typeof window !== "undefined";

  // Initialize from localStorage if available
  const stored = isBrowser ? localStorage.getItem("dayRate") : null;
  const initial = stored ? JSON.parse(stored) : { visits: 0 };

  const { subscribe, set, update } = writable(initial);

  return {
    subscribe,
    incrementVisit: () =>
      update((state) => {
        const newState = {
          visits: state.visits + 1,
        };
        if (isBrowser) {
          localStorage.setItem("dayRate", JSON.stringify(newState));
        }
        return newState;
      }),
    reset: () => {
      const resetState = { visits: 0 };
      if (isBrowser) {
        localStorage.setItem("dayRate", JSON.stringify(resetState));
      }
      set(resetState);
    },
    getBaseRate: (visits) => 500 + visits * 10,
  };
}

export const dayRate = createDayRateStore();
