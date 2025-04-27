"use client";

import { ThemeMode, themeStorageKey } from "@theme/theme";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ToggleModeContext = createContext({
  mode: ThemeMode.LIGHT,
  toggle: () => {},
} as {
  mode: ThemeMode;
  toggle: () => void;
});

type ToggleThemeProviderProps = {
  children: React.ReactNode;
};

export const ToggleModeProvider = ({ children }: ToggleThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  useEffect(() => {
    const saved = window.localStorage.getItem(
      themeStorageKey
    ) as ThemeMode | null;
    if (saved) setMode(saved);
    else if (
      window.matchMedia(`(prefers-color-scheme: ${ThemeMode.DARK})`).matches
    ) {
      setMode(ThemeMode.DARK);
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const next = prev === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT;
      window.localStorage.setItem(themeStorageKey, next);
      return next;
    });
  };

  return (
    <ToggleModeContext.Provider value={{ mode, toggle }}>
      <button onClick={toggle}>{mode === ThemeMode.LIGHT ? "🌙" : "☀️"}</button>
      {children}
    </ToggleModeContext.Provider>
  );
};
