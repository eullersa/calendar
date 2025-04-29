import { SwitchLocaleLanguage } from "@/features/i18n/components/SwitchLocaleLanguage/SwitchLocaleLanguage";
import { SwitchThemeMode } from "@/features/theme/components/SwitchThemeMode/SwitchThemeMode";
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
