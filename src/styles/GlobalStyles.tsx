"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Baloo Bhai 2", sans-serif;
    font-optical-sizing: auto;
    font-size: 18px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  * {
    box-sizing: border-box;
  }
`;
