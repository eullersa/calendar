"use client";

import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export const useUpdateLocale = () => {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const updateLocale = (locale: Locale) => {
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return {
    locale,
    isPending,
    updateLocale,
  };
};
