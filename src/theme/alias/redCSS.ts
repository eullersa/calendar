import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const NEUTRAL: KeyPaths<PrimitiveTheme> = "primitive.colors.red" as const;

export const redCSS = getGenericCssVar<PrimitiveTheme, typeof NEUTRAL>(NEUTRAL);
