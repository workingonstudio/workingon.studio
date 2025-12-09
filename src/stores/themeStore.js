import { writable } from "svelte/store";

const THEME_KEY = "theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(THEME_KEY);

  // Return stored preference, or default to light
  return stored === "dark" ? "dark" : "light";
}

// Initialize theme immediately
if (typeof window !== "undefined") {
  const theme = getInitialTheme();
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
}

export const theme = writable(getInitialTheme());

theme.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
});
