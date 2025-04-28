"use client";

import { ThemeMode } from "@theme/theme";
import { useModeStore } from "@/store/useModeStore";
import { useEffect } from "react";
import { useUpdateLocale } from "@/hooks/useUpdateLocale";

type InitializeModeProps = {
  children: React.ReactNode;
};

export const InitializeMode = ({ children }: InitializeModeProps) => {
  const { mode, toggleMode, getInitialMode } = useModeStore();
  const { isPending, locale, updateLocale } = useUpdateLocale();

  useEffect(() => {
    getInitialMode();
  }, [getInitialMode]);

  return (
    <>
      <button onClick={toggleMode}>
        {mode === ThemeMode.LIGHT ? "🌙" : "☀️"}
      </button>
      <button
        onClick={() => {
          updateLocale(locale === "en" ? "pt" : "en");
        }}
        disabled={isPending}
      >
        {locale.toUpperCase()}
      </button>
      {children}
    </>
  );
};
