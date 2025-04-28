"use server";

import { Locale, DEFAULT_LOCALE, LOCALE_COOKIE_KEY } from "@/i18n/config";
import { cookies } from "next/headers";

export async function getUserLocale() {
  return (await cookies()).get(LOCALE_COOKIE_KEY)?.value || DEFAULT_LOCALE;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(LOCALE_COOKIE_KEY, locale);
}
