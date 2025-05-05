"use client";

import { createGlobalStyle } from "styled-components";
import {
  createCssVars,
  fontFamilyCSS,
  fontWeightCSS,
  semanticCSS,
} from "@/theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) => createCssVars(theme)}
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${semanticCSS("background")};
    color: ${semanticCSS("textColor")};
    font-size: 100%;
  }

  * {
    box-sizing: border-box;
    font-optical-sizing: auto;
    font-family: ${fontFamilyCSS("body")};
    font-weight: ${fontWeightCSS("regular")};
  }
`;
