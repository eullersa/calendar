import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initializeMode, ThemeMode, themeStorageKey } from "@theme/theme";

type ToggleModeStoreState = {
  mode: ThemeMode;
};

type ToggleModeStoreActions = {
  toggleMode: () => void;
  getInitialMode: () => void;
};

type ToggleModeStore = ToggleModeStoreState & ToggleModeStoreActions;

export const useModeStore = create<ToggleModeStore>()(
  persist(
    (set) => ({
      mode: ThemeMode.LIGHT,
      toggleMode: () =>
        set(({ mode }) => ({
          mode: mode === ThemeMode.LIGHT ? ThemeMode.DARK : ThemeMode.LIGHT,
        })),
      getInitialMode: () => {
        const mode = initializeMode();
        if (!mode) return;
        set({ mode });
      },
    }),
    {
      name: themeStorageKey,
    }
  )
);
