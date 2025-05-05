import { getGenericCssVar, KeyPaths } from "@/theme";
import { DefaultTheme } from "styled-components";

type SemanticTheme = Pick<DefaultTheme, "components">;
const COMPONENTS: KeyPaths<SemanticTheme> = "components" as const;

export const componentsCSS = getGenericCssVar<SemanticTheme, typeof COMPONENTS>(
  COMPONENTS
);
