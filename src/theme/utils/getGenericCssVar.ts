import { LeafKeyPaths, RemovePrefix } from "@/theme";

export const getGenericCssVar = <T extends object, K extends string>(
  base: K
) => {
  return <
    P extends Extract<LeafKeyPaths<T>, `${K}.${string}`>,
    ExactPath extends RemovePrefix<P, K>,
  >(
    path: ExactPath
  ) => {
    const cssVar = `--${String(`${base}.${path}`).replace(/\./g, "-")}`;

    return `var(${cssVar})` as `var(${K}.${ExactPath})`;
  };
};
