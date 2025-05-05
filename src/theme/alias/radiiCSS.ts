import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const RADII: KeyPaths<PrimitiveTheme> = "primitive.radii" as const;

export const radiiCSS = getGenericCssVar<PrimitiveTheme, typeof RADII>(RADII);
