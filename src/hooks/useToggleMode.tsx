import { ToggleModeContext } from "@/providers/ToggleModeProvider";
import { useContext } from "react";

export const useToggleMode = () => {
  const context = useContext(ToggleModeContext);

  if (!context) {
    throw new Error("useToggleMode must be used within a ToggleModeProvider");
  }

  return context;
};
