import { InitializeModeContext } from "@/providers/InitializeModeProvider";
import { useContext } from "react";

export const useCurrentMode = () => {
  const currentMode = useContext(InitializeModeContext);

  if (currentMode === undefined) {
    throw new Error("useTheme must be used within a InitializeModeProvider");
  }

  return currentMode;
};
