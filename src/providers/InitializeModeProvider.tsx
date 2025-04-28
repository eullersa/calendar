"use client";

import { ThemeMode } from "@theme/theme";
import { createContext, useEffect } from "react";
import { useInitializeMode } from "@/hooks/useInitializeMode";
import { useUpdateLocale } from "@/hooks/useUpdateLocale";

export const InitializeModeContext = createContext<ThemeMode>(ThemeMode.LIGHT);

type InitializeModeProps = {
  defaultMode?: ThemeMode;
  children: React.ReactNode;
};

export const InitializeModeProvider = ({
  children,
  defaultMode,
}: InitializeModeProps) => {
  const {
    isPending: isPendingMode,
    mode,
    toggleMode,
    getInitialMode,
  } = useInitializeMode(defaultMode);
  const {
    isPending: isPendingLocale,
    locale,
    updateLocale,
  } = useUpdateLocale();

  useEffect(() => {
    getInitialMode();
  }, []);

  return (
    <InitializeModeContext.Provider value={mode}>
      <button onClick={toggleMode} disabled={isPendingMode}>
        {mode === ThemeMode.LIGHT ? "🌙" : "☀️"}
      </button>
      <button
        onClick={() => {
          updateLocale(locale === "en" ? "pt" : "en");
        }}
        disabled={isPendingLocale}
      >
        {locale.toUpperCase()}
      </button>
      {children}
    </InitializeModeContext.Provider>
  );
};
