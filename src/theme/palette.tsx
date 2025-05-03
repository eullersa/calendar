import { cssVars } from "./cssVars";

const theme = {
  borderRadius: "5px",
};

const modalSizes = {
  borderRadius: "5px",
  titleSize: "30px",
  titleFontWeight: "700",
};

export const lightTheme = {
  theme,
  colors: {
    text: cssVars.lightDark,
    background: cssVars.lightWhite1,
  },
  input: {
    hover: cssVars.lightDark,
    text: cssVars.lightDark,
    placeholder: cssVars.lightGray3,
    border: cssVars.lightGray1,
    borderError: cssVars.lightRed2,
    bgError: cssVars.lightRed1,
    padding: "8px 12px",
  },
  calendar: {
    text: cssVars.lightDark,
    background: cssVars.lightWhite2,
    hover: cssVars.lightWhite3,
    border: cssVars.lightGray1,
  },
  modal: {
    colors: {
      mask: cssVars.lightDarkTransparent45,
      background: cssVars.lightWhite1,
      buttonHover: cssVars.lightWhite3,
      buttonColor: cssVars.lightDark,
    },
    size: modalSizes,
  },
};

export const darkTheme: typeof lightTheme = {
  theme,
  colors: {
    text: cssVars.lightWhite1,
    background: "#141519",
  },
  input: {
    hover: "#555555",
    text: cssVars.lightWhite1,
    placeholder: "var(--light-gray-placeholder)",
    bgError: "#3a3a3a",
    borderError: "#3a3a3a",
    border: "#3a3a3a",
    padding: "8px 12px",
  },
  calendar: {
    text: cssVars.lightWhite1,
    background: "#141519",
    hover: "#212121",
    border: "#3a3a3a",
  },
  modal: {
    colors: {
      mask: "#1313136c",
      background: "#2b2c2d",
      buttonHover: "#3a3a3a",
      buttonColor: "#f75c5c",
    },
    size: modalSizes,
  },
};
