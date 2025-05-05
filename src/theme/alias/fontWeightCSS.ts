import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> =
  "primitive.typography.fontWeight" as const;

export const fontWeightCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(
  NEUTRAL
);
