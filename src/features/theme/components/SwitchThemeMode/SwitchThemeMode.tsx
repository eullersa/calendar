"use client";

import { useThemeMode } from "@/features/theme";
import { ThemeMode } from "@/theme";

export const SwitchThemeMode = () => {
  const { isPending, mode, toggleMode } = useThemeMode();

  return (
    <button onClick={toggleMode} disabled={isPending}>
      {mode === ThemeMode.LIGHT ? "🌙" : "☀️"}
    </button>
  );
};
