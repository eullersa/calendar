import { baseTheme, darkPalette, lightPalette } from "@/theme";

export const lightTheme = { ...baseTheme, ...lightPalette } as const;

export const darkTheme = {
  ...baseTheme,
  ...darkPalette,
} as const;
