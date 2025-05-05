import { getGenericCssVar, KeyPaths, semantic, ThemeMode } from "@/theme";

type SemanticTheme = Pick<ReturnType<typeof semantic<ThemeMode>>, "semantic">;
const SEMANTIC: KeyPaths<SemanticTheme> = "semantic" as const;

export const semanticCSS = getGenericCssVar<SemanticTheme, typeof SEMANTIC>(
  SEMANTIC
);
