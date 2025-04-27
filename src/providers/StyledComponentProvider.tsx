"use client";

import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { lightTheme, darkTheme, ThemeMode } from "@theme/theme";
import { useToggleMode } from "@/hooks/useToggleMode";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export const StyledComponentProvider = ({
  children,
}: StyledComponentProviderProps) => {
  const { mode } = useToggleMode();

  return (
    <ThemeProvider theme={mode === ThemeMode.LIGHT ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
