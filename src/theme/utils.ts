import { darkTheme, lightTheme } from "@/theme/palette";
import { ThemeMode } from "@/theme/types";

export const getTheme = (mode: ThemeMode) => {
  switch (mode) {
    case ThemeMode.LIGHT:
      return lightTheme;
    case ThemeMode.DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
};

export const initializeMode = () => {
  if (typeof window !== "undefined") {
    const preferredMode = window.matchMedia(
      `(prefers-color-scheme: ${ThemeMode.DARK})`
    ).matches;

    return preferredMode ? ThemeMode.DARK : ThemeMode.LIGHT;
  }

  return ThemeMode.LIGHT;
};
