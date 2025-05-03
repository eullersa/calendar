export const rootColors = {
  lightDark: "#282828",
  lightDarkMarine: "#262b35",
  lightWhite1: "#ffffff",
  lightWhite2: "#fafafa",
  lightWhite3: "#f3f3f3",
  lightGray1: "#c5c5c5",
  lightGray2: "#adadad",
  lightGray3: "#797979",
  lightRed1: "#e4797936",
  lightRed2: "#e64848",
  lightDarkTransparent45: "rgba(0, 0, 0, 0.45)",
} as const;

export type RootColorKey = keyof typeof rootColors;
