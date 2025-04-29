import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Calendar");
  return (
    <div>
      <SwitchThemeMode />
      <SwitchLocaleLanguage />
      {t("title")}
    </div>
  );
}
