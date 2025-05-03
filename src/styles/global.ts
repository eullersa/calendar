"use client";

import { createGlobalStyle } from "styled-components";
import { createCssVars, getCssVar } from "@/theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) => createCssVars(theme)}
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${getCssVar("colors.neutral.0")};
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
    font-optical-sizing: auto;
    color: ${getCssVar("colors.neutral.800")};
    font-family: ${getCssVar("typography.fontFamily.body")};
    font-weight: ${getCssVar("typography.fontWeight.regular")};
  }
`;
