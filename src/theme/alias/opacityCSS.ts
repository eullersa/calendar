import { getGenericCssVar, KeyPaths, primitive } from "@/theme";

type PrimitiveTheme = Pick<typeof primitive, "primitive">;
const OPACITY: KeyPaths<PrimitiveTheme> = "primitive.colors.opacity" as const;

export const opacity = getGenericCssVar<PrimitiveTheme, typeof OPACITY>(
  OPACITY
);
