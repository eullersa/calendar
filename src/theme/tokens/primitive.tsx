export const primitive = {
  primitive: {
    colors: {
      primary: {},
      secondary: {},
      neutral: {
        0: "#FFFFFF",
        100: "#f7f7f7",
        150: "#ebebeb",
        200: "#E5E5E5",
        250: "#d3d3d3",
        300: "#CCCCCC",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        750: "#303030",
        800: "#262626",
        850: "#202020",
        900: "#171717",
      },
      red: {
        0: "#FFFFFF",
        100: "#FEE2E2",
        200: "#FCA5A5",
        300: "#F87171",
        400: "#EF4444",
        500: "#DC2626",
        600: "#B91C1C",
        700: "#991B1B",
        800: "#7F1D1D",
        900: "#67000D",
      },
      opacity: {
        transparent: "rgba(0, 0, 0, 0)",
        100: "rgba(0, 0, 0, 0.1)",
        200: "rgba(0, 0, 0, 0.2)",
        300: "rgba(0, 0, 0, 0.3)",
        400: "rgba(0, 0, 0, 0.4)",
        500: "rgba(0, 0, 0, 0.5)",
        600: "rgba(0, 0, 0, 0.6)",
        700: "rgba(0, 0, 0, 0.7)",
        800: "rgba(0, 0, 0, 0.8)",
        900: "rgba(0, 0, 0, 0.9)",
      },
    },
    typography: {
      fontFamily: {
        body: "'Baloo Bhai 2', sans-serif",
        heading: "'Baloo Bhai 2', sans-serif",
        mono: "'Fira Code', monospace",
      },
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        md: "1rem", // 16px
        lg: "1.063rem", // 17px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        none: 1,
        dense: 1.25,
        normal: 1.5,
        relaxed: 1.75,
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
      },
    },
    space: {
      px: "1px",
      0: "0",
      1: "0.25rem", // 4px
      2: "0.5rem", // 8px
      3: "0.75rem", // 12px
      4: "1rem", // 16px
      5: "1.25rem", // 20px
      6: "1.5rem", // 24px
      8: "2rem", // 32px
      10: "2.5rem", // 40px
      12: "3rem", // 48px
      16: "4rem", // 64px
    },
    breakpoints: {
      xs: "0px",
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1920px",
    },
    radii: {
      none: "0",
      sm: "2px",
      md: "4px",
      lg: "6px",
      full: "9999px",
    },
    shadows: [
      "none",
      "0px 1px 2px rgba(0,0,0,0.05)",
      "0px 1px 3px rgba(0,0,0,0.1), 0px 1px 2px rgba(0,0,0,0.06)",
      "0px 4px 6px rgba(0,0,0,0.1), 0px 2px 4px rgba(0,0,0,0.06)",
      "0px 10px 15px rgba(0,0,0,0.1), 0px 4px 6px rgba(0,0,0,0.05)",
      // …até ~24 níveis, conforme necessidade…
    ],
    transitions: {
      duration: {
        fastest: "100ms",
        faster: "150ms",
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
        slower: "700ms",
        slowest: "1s",
      },
      easing: {
        standard: "cubic-bezier(0.4, 0, 0.2, 1)",
        decelerate: "cubic-bezier(0.0, 0, 0.2, 1)",
        accelerate: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
} as const;
