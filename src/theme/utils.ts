import { darkTheme, lightTheme, ThemeMode } from "@/theme";

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

export const detectSystemThemeMode = () => {
  if (typeof window !== "undefined") {
    const isDarkMode = window.matchMedia(
      `(prefers-color-scheme: ${ThemeMode.DARK})`
    ).matches;

    return isDarkMode ? ThemeMode.DARK : ThemeMode.LIGHT;
  }

  return ThemeMode.LIGHT;
};
