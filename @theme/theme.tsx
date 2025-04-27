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

export type ThemeName = "light" | "dark";

export type Theme = typeof lightTheme;
