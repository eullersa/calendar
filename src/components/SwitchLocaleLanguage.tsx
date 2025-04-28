import { useUpdateLocale } from "@/hooks/useUpdateLocale";

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
