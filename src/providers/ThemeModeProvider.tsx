"use client";

import { createContext, useEffect, useTransition } from "react";
import { detectSystemThemeMode, ThemeMode } from "@/theme";
import { setUserTheme } from "@/features/theme";

export const ThemeModeContext = createContext<{
  mode: ThemeMode;
  toggleMode: () => void;
  isPending: boolean;
}>({
  mode: ThemeMode.LIGHT,
  toggleMode: () => {},
  isPending: false,
});

type ThemeModeProps = {
  defaultMode?: ThemeMode;
  children: React.ReactNode;
};

export const ThemeModeProvider = ({
  children,
  defaultMode,
}: ThemeModeProps) => {
  const [isPending, startTransition] = useTransition();

  const mode = defaultMode ?? ThemeMode.LIGHT;

  const toggleMode = () => {
    startTransition(() => {
      setUserTheme(
        defaultMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
      );
    });
  };

  const getInitialMode = async () => {
    if (defaultMode) return;
    const mode = detectSystemThemeMode();
    if (!mode) return;
    setUserTheme(mode);
  };

  useEffect(() => {
    getInitialMode();
  }, []);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode, isPending }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
