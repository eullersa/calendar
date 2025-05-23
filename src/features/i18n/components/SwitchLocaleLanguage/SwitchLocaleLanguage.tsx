"use client";

import { useUpdateLocale } from "@/features/i18n";

export const SwitchLocaleLanguage = () => {
  const { isPending, locale, updateLocale } = useUpdateLocale();

  return (
    <button
      onClick={() => {
        updateLocale(locale === "en" ? "pt" : "en");
      }}
      disabled={isPending}
    >
      {locale.toUpperCase()}
    </button>
  );
};
