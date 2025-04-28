"use client";

import { ThemeMode } from "@theme/theme";
import { useModeStore } from "@/store/useModeStore";
import { useEffect } from "react";

type InitializeModeProps = {
  children: React.ReactNode;
};

export const InitializeMode = ({ children }: InitializeModeProps) => {
  const { mode, toggleMode, getInitialMode } = useModeStore();

  useEffect(() => {
    getInitialMode();
  }, [getInitialMode]);

  return (
    <>
      <button onClick={toggleMode}>
        {mode === ThemeMode.LIGHT ? "🌙" : "☀️"}
      </button>
      {children}
    </>
  );
};
