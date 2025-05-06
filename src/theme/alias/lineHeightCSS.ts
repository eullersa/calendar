import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> =
  "primitive.typography.lineHeight" as const;

export const lineHeightCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(
  NEUTRAL
);
