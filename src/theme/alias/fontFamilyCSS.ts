import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> =
  "primitive.typography.fontFamily" as const;

export const fontFamilyCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(
  NEUTRAL
);
