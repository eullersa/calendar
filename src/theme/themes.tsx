import { primitive, components, ThemeMode, semantic } from "@/theme";

export const theme = <T extends ThemeMode>(mode: T) =>
  ({
    theme: mode,
    ...primitive,
    ...semantic(mode),
    ...components,
  }) as const;
