import { writable } from "svelte/store";

const defaultValue = {
  submitted: false,
  email: null,
};

const isBrowser = typeof window !== "undefined";

const initialValue = isBrowser
  ? JSON.parse(localStorage.getItem("dadreply-submission") || JSON.stringify(defaultValue))
  : defaultValue;

export const submittedEmail = writable(initialValue);

if (isBrowser) {
  submittedEmail.subscribe((value) => {
    localStorage.setItem("dadreply-submission", JSON.stringify(value));
  });
}
