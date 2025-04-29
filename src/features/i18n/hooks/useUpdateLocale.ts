"use client";

import { setUserLocale } from "@/features/i18n/actions/set-user-locale";
import { Locale } from "@/features/i18n/config";
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
