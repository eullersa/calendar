"use client";

import { ThemeMode } from "@theme/theme";
import { createContext, useEffect } from "react";
import { useInitializeMode } from "@/hooks/useInitializeMode";
import { SwitchLocaleLanguage } from "@/components/SwitchLocaleLanguage";
import { SwitchThemeMode } from "@/components/SwitchThemeMode";

export const InitializeModeContext = createContext<{
  mode: ThemeMode;
  toggleMode: () => void;
  isPending: boolean;
}>({
  mode: ThemeMode.LIGHT,
  toggleMode: () => {},
  isPending: false,
});

type InitializeModeProps = {
  defaultMode?: ThemeMode;
  children: React.ReactNode;
};

export const InitializeModeProvider = ({
  children,
  defaultMode,
}: InitializeModeProps) => {
  const { mode, getInitialMode, toggleMode, isPending } =
    useInitializeMode(defaultMode);

  useEffect(() => {
    getInitialMode();
  }, []);

  return (
    <InitializeModeContext.Provider value={{ mode, toggleMode, isPending }}>
      <SwitchThemeMode />
      <SwitchLocaleLanguage />
      {children}
    </InitializeModeContext.Provider>
  );
};
