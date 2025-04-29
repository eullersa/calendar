"use client";

import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { useThemeMode } from "@/features/theme";
import { getTheme } from "@/theme";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export const StyledComponentProvider = ({
  children,
}: StyledComponentProviderProps) => {
  const { mode } = useThemeMode();

  return <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>;
};
