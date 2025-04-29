"use server";

import { THEME_STORAGE_KEY, ThemeMode } from "@/theme";
import { cookies } from "next/headers";

export async function getUserTheme() {
  return (await cookies()).get(THEME_STORAGE_KEY)?.value as
    | ThemeMode
    | undefined;
}

export async function setUserTheme(mode: ThemeMode) {
  (await cookies()).set(THEME_STORAGE_KEY, mode);
}
