"use client";

import React from "react";

export type Theme = "light" | "dark" | "system";
type Resolved = "light" | "dark";

interface ThemeContextValue {
  /** What the user chose — may be "system" */
  theme: Theme;
  /** What is actually on screen right now */
  resolved: Resolved;
  setTheme: (t: Theme) => void;
  /** Flip between light and dark, pinning the choice */
  toggle: () => void;
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "webxite-theme";

const systemPrefers = (): Resolved =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const readStored = (): Theme => {
  if (typeof window === "undefined") return "system";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    /* private mode, blocked storage — fall through to system */
  }
  return "system";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>(readStored);
  const [resolved, setResolved] = React.useState<Resolved>(() =>
    readStored() === "system" ? systemPrefers() : (readStored() as Resolved),
  );

  /* Apply to <html> so Tailwind's `dark:` variant and color-scheme both work */
  React.useEffect(() => {
    const next: Resolved = theme === "system" ? systemPrefers() : theme;
    setResolved(next);

    const root = document.documentElement;
    root.classList.toggle("dark", next === "dark");
    root.style.colorScheme = next;

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* nothing to do if storage is unavailable */
    }
  }, [theme]);

  /* Follow the OS while the choice is still "system" */
  React.useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const next: Resolved = mq.matches ? "dark" : "light";
      setResolved(next);
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.style.colorScheme = next;
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolved,
      setTheme: setThemeState,
      toggle: () => setThemeState(resolved === "dark" ? "light" : "dark"),
    }),
    [theme, resolved],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
