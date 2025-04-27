export const themeStorageKey = "theme";

export const lightTheme = {
  colors: {
    text: "#212121",
    background: "#f7f7f8",
  },
};

export const darkTheme: typeof lightTheme = {
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
