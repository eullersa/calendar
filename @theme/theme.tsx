export const THEME_STORAGE_KEY = "theme";

const lightTheme = {
  colors: {
    text: "#212121",
    background: "#f7f7f8",
  },
};

const darkTheme: typeof lightTheme = {
  colors: {
    text: "#ffffff",
    background: "#141519",
  },
};

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = typeof lightTheme;

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
