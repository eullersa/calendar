import { ThemeMode, neutralCSS, radiiCSS } from "@/theme";

export const semantic = <T extends ThemeMode>(mode: T) =>
  ({
    semantic: {
      cornerCard: radiiCSS("lg"),
      background:
        mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("900"),
      textColor: mode === ThemeMode.LIGHT ? neutralCSS("750") : neutralCSS("0"),
      backgroundCard:
        mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("750"),
      hoverCard:
        mode === ThemeMode.LIGHT ? neutralCSS("150") : neutralCSS("700"),
      backgroundSlot:
        mode === ThemeMode.LIGHT ? neutralCSS("0") : neutralCSS("850"),
      backgroundHoveredSlot:
        mode === ThemeMode.LIGHT ? neutralCSS("100") : neutralCSS("800"),
      borderSlot:
        mode === ThemeMode.LIGHT ? neutralCSS("300") : neutralCSS("600"),
      borderInput:
        mode === ThemeMode.LIGHT ? neutralCSS("250") : neutralCSS("600"),
      iconInput:
        mode === ThemeMode.LIGHT ? neutralCSS("500") : neutralCSS("400"),
      iconHoveredInput:
        mode === ThemeMode.LIGHT ? neutralCSS("700") : neutralCSS("0"),
      borderHoveredInput:
        mode === ThemeMode.LIGHT ? neutralCSS("700") : neutralCSS("150"),
    },
  }) as const;
