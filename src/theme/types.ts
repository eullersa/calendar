import { theme } from "@/theme";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type AppTheme = ReturnType<typeof theme<ThemeMode>>;
