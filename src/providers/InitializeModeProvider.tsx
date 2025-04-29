"use client";

import { createContext, useEffect, useTransition } from "react";
import { SwitchLocaleLanguage } from "@/components/SwitchLocaleLanguage";
import { SwitchThemeMode } from "@/components/SwitchThemeMode";
import { initializeMode, ThemeMode } from "@/theme";
import { setUserTheme } from "@/services/theme";

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
  const [isPending, startTransition] = useTransition();

  const mode = defaultMode ?? ThemeMode.LIGHT;

  const toggleMode = () => {
    startTransition(() => {
      setUserTheme(
        defaultMode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT
      );
    });
  };

  const getInitialMode = async () => {
    if (defaultMode) return;
    const mode = initializeMode();
    if (!mode) return;
    setUserTheme(mode);
  };

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
