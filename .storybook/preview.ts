import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyles } from "../src/styles/global";
import { theme } from "../src/theme/themes";
import { ThemeMode } from "../src/theme/types";
import "@/styles/font.css";

const lightTheme = theme(ThemeMode.LIGHT);
const darkTheme = theme(ThemeMode.DARK);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: lightTheme,
        dark: darkTheme,
      },
      defaultTheme: ThemeMode.LIGHT,
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
