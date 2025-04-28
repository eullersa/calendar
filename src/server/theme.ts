"use server";

import { ThemeMode, THEME_STORAGE_KEY } from "@theme/theme";
import { cookies } from "next/headers";

export async function getTheme() {
  return (await cookies()).get(THEME_STORAGE_KEY)?.value as
    | ThemeMode
    | undefined;
}

export async function setTheme(mode: ThemeMode) {
  (await cookies()).set(THEME_STORAGE_KEY, mode);
}
