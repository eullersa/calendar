"use client";

import { rootColors } from "@/theme/colors";
import { createGlobalStyle } from "styled-components";

const toVar = (k: string) =>
  `--${k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`;

export const GlobalStyle = createGlobalStyle`
  // root colors
  :root {
    ${Object.entries(rootColors)
      .map(([k, v]) => `${toVar(k)}: ${v};`)
      .join("\n    ")}
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  * {
    box-sizing: border-box;
    font-family: "Baloo Bhai 2", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
  }
`;
