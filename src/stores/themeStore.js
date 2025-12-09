import { writable } from "svelte/store";

const THEME_KEY = "workingon-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const stored = localStorage.getItem(THEME_KEY);
  if (stored && ["light", "dark", "sunset"].includes(stored)) {
    return stored;
  }

  // Default to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Initialize theme immediately
if (typeof window !== "undefined") {
  const theme = getInitialTheme();
  document.documentElement.classList.remove("light", "dark", "sunset");
  if (theme !== "light") {
    document.documentElement.classList.add(theme);
  }
}

export const theme = writable(getInitialTheme());

theme.subscribe((value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(THEME_KEY, value);

    // Clear all theme classes, then add the current one
    document.documentElement.className = "";
    if (value !== "light") {
      document.documentElement.classList.add(value);
    }
  }
});
