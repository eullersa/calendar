const modalSizes = {
  borderRadius: "5px",
  titleSize: "30px",
  titleFontWeight: "700",
};

export const lightTheme = {
  colors: {
    text: "#282828",
    background: "#ffffff",
    hoverBackground: "#FEFFFF",
  },
  calendar: {
    text: "#282828",
    background: "#F9FAFA",
    hoverBackground: "#f3f3f3",
    border: "#c5c5c5",
  },
  modal: {
    colors: {
      mask: "#00000070",
      background: "#ffffff",
      buttonHover: "#f3f3f3",
      buttonColor: "#282828",
    },
    size: modalSizes,
  },
};

export const darkTheme: typeof lightTheme = {
  colors: {
    text: "#ffffff",
    background: "#141519",
    hoverBackground: "#282828",
  },
  calendar: {
    text: "#ffffff",
    background: "#141519",
    hoverBackground: "#212121",
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
