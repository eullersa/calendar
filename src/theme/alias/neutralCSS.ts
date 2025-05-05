import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> = "primitive.colors.neutral" as const;

export const neutralCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(
  NEUTRAL
);
