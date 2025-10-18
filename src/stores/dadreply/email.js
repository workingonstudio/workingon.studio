import { writable } from "svelte/store";

const defaultValue = {
  submitted: false,
  email: null,
  claimed: false,
};

const isBrowser = typeof window !== "undefined";

const initialValue = isBrowser
  ? JSON.parse(localStorage.getItem("dadreply-submission") || JSON.stringify(defaultValue))
  : defaultValue;

function createSubmittedEmailStore() {
  const { subscribe, set, update } = writable(initialValue);

  return {
    subscribe,
    set,
    update,
    reset: () => set(defaultValue),
  };
}

export const submittedEmail = createSubmittedEmailStore();

// Set up localStorage sync
if (isBrowser) {
  submittedEmail.subscribe((value) => {
    localStorage.setItem("dadreply-submission", JSON.stringify(value));
  });
}
