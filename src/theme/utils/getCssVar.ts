import { DefaultTheme } from "styled-components";
import { LeafKeyPaths, PathValue } from "@/theme";

/**
 * Returns the CSS variable reference for the given theme path.
 *
 * Depending on the current theme mode, the same `path` can map to two different values:
 *   1. Light mode token
 *   2. Dark mode token
 *
 * @template K - A valid theme path (LeafKeyPaths<DefaultTheme>), e.g. "colors.primary.100"
 * @param {K} path - The dot-notated key path to the design token.
 * @returns {PathValue<DefaultTheme, K>} A `var(--…)` string that resolves to the light mode value or the dark mode value.
 */
export const getCssVar = <K extends LeafKeyPaths<DefaultTheme>>(
  path: K
): PathValue<DefaultTheme, K> => {
  const cssVar = `--${path.replace(/\./g, "-")}`;
  return `var(${cssVar as `--${K}`})` as PathValue<DefaultTheme, K>;
};
