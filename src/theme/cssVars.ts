import { rootColors, RootColorKey } from "./colors";

const toKebab = (s: string) =>
  s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

export const cssVars: Record<RootColorKey, string> = Object.keys(
  rootColors
).reduce((acc, key) => {
  const kebab = toKebab(key);
  acc[key as RootColorKey] = `var(--${kebab})`;
  return acc;
}, {} as Record<RootColorKey, string>);

export type CssVarKey = keyof typeof cssVars;
