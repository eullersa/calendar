"use client";

import {
  createCssVars,
  fontFamilyCSS,
  fontWeightCSS,
  semanticCSS,
} from "@/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    ${({ theme }) => createCssVars(theme)}
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${semanticCSS("color.background.page.default")};
    color: ${semanticCSS("color.text.page.default")};
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-family: ${fontFamilyCSS("body")};
    font-weight: ${fontWeightCSS("regular")};
  }
`;
