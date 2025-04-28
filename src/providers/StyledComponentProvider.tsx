"use client";

import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { useModeStore } from "@/store/useModeStore";
import { getTheme } from "@theme/theme";

type StyledComponentProviderProps = {
  children: ReactNode;
};

export const StyledComponentProvider = ({
  children,
}: StyledComponentProviderProps) => {
  const { mode } = useModeStore();

  return <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>;
};
