"use server";

import { DEFAULT_LOCALE, LOCALE_COOKIE_KEY } from "@/features/i18n/config";
import { cookies } from "next/headers";

export async function getUserLocale() {
  return (await cookies()).get(LOCALE_COOKIE_KEY)?.value || DEFAULT_LOCALE;
}
