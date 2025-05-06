import { getGenericCssVar, KeyPaths, semantic, ThemeMode } from "@/theme";

type SemanticTheme = Pick<ReturnType<typeof semantic<ThemeMode>>, "semantic">;
const SEMANTIC: KeyPaths<SemanticTheme> = "semantic.border" as const;

export const borderRadiusCSS = getGenericCssVar<SemanticTheme, typeof SEMANTIC>(
  SEMANTIC
);
