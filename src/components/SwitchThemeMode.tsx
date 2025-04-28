import { useCurrentMode } from "@/hooks/useCurrentMode";
import { ThemeMode } from "@theme/theme";

export const SwitchThemeMode = () => {
  const { isPending, mode, toggleMode } = useCurrentMode();

  return (
    <button onClick={toggleMode} disabled={isPending}>
      {mode === ThemeMode.LIGHT ? "🌙" : "☀️"}
    </button>
  );
};
