"use client";

import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { getTheme } from "@theme/theme";
import { useCurrentMode } from "@/hooks/useCurrentMode";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export const StyledComponentProvider = ({
  children,
}: StyledComponentProviderProps) => {
  const { mode } = useCurrentMode();

  return <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>;
};
