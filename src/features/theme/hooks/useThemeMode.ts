"use client";

import { useContext } from "react";
import { ThemeModeContext } from "@/providers/ThemeModeProvider";

export const useThemeMode = () => {
  const currentMode = useContext(ThemeModeContext);

  if (currentMode === undefined) {
    throw new Error("useTheme must be used within a ThemeModeProvider");
  }

  return currentMode;
};
