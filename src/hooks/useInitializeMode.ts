"use client";

import { useTransition } from "react";
import { setTheme } from "@/server/theme";
import { initializeMode, ThemeMode } from "@theme/theme";

export const useInitializeMode = (defaultMode?: ThemeMode) => {
  const [isPending, startTransition] = useTransition();

  const toggleMode = () => {
    startTransition(() => {
      setTheme(
        defaultMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
      );
    });
  };

  const getInitialMode = async () => {
    if (defaultMode) return;
    const mode = initializeMode();
    if (!mode) return;
    setTheme(mode);
  };

  return {
    mode: defaultMode ?? ThemeMode.LIGHT,
    isPending,
    toggleMode,
    getInitialMode,
  };
};
