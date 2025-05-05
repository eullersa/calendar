import { LeafKeyPaths, PathValue } from "@/theme";
import { DefaultTheme } from "styled-components";

export const getCssVar = <
  K extends Extract<LeafKeyPaths<DefaultTheme>, string>,
>(
  path: K
): PathValue<DefaultTheme, K> => {
  const cssVar = `--${path.replace(/\./g, "-")}`;
  return `var(${cssVar as `--${K}`})` as PathValue<DefaultTheme, K>;
};
