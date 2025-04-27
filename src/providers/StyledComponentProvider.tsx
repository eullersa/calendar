"use client";

import { ThemeProvider } from "styled-components";
import { useEffect, useState, ReactNode } from "react";
import { lightTheme, darkTheme, ThemeName } from "@theme/theme";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export const StyledComponentProvider = ({
  children,
}: StyledComponentProviderProps) => {
  const [mode, setMode] = useState<ThemeName>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as ThemeName | null;
    if (saved) setMode(saved);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  const toggle = () => {
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <button onClick={toggle}>{mode === "light" ? "🌙" : "☀️"}</button>
      {children}
    </ThemeProvider>
  );
};
