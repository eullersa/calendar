import { DefaultTheme } from "styled-components";

export const createCssVars = (t: DefaultTheme, prefix = ""): string =>
  Object.entries(t)
    .map(([key, value]) =>
      typeof value === "object"
        ? createCssVars(value, `${prefix}${key}-`)
        : `--${prefix}${key}: ${value};`
    )
    .join("\n");
