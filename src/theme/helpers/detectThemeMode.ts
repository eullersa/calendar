import { ThemeMode } from "@/theme";

export const detectThemeMode = () => {
  if (typeof window !== "undefined") {
    const isDarkMode = window.matchMedia(
      `(prefers-color-scheme: ${ThemeMode.DARK})`
    ).matches;

    return isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT;
  }

  return ThemeMode.LIGHT;
};
