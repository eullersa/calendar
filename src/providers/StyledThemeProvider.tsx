"use client";

import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { useThemeMode } from "@/features/theme";
import { theme } from "@/theme";

type StyledThemeProviderProps = {
  children: ReactNode;
};

export const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
  const { mode } = useThemeMode();

  return <ThemeProvider theme={theme(mode)}>{children}</ThemeProvider>;
};
