import { darkTheme, lightTheme, MergeDeep } from "@/theme";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

export type Theme = MergeDeep<typeof lightTheme, typeof darkTheme>;
