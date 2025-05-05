import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> =
  "primitive.typography.fontSize" as const;

export const fontSizeCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(
  NEUTRAL
);
