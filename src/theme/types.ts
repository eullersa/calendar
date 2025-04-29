import { lightTheme } from "@/theme/palette";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = typeof lightTheme;
