"use server";

import { Locale, LOCALE_COOKIE_KEY } from "@/features/i18n";
import { cookies } from "next/headers";

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(LOCALE_COOKIE_KEY, locale);
}
