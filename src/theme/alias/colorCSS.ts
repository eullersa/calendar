import { getGenericCssVar, KeyPaths, semantic, ThemeMode } from "@/theme";

type SemanticTheme = Pick<ReturnType<typeof semantic<ThemeMode>>, "semantic">;
const SEMANTIC: KeyPaths<SemanticTheme> = "semantic.color" as const;

export const colorCSS = getGenericCssVar<SemanticTheme, typeof SEMANTIC>(
  SEMANTIC
);
