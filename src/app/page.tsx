import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { TimeSlot } from "@/ui/primitives/TimeSlot";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Calendar");
  return (
    <div>
      <div>
        <SwitchThemeMode />
        <SwitchLocaleLanguage />
        {t("title")}
      </div>
      <Flex $flex="1 1 100%" $gap={10} $wrap $justify="center">
        <TimeSlot />
      </Flex>
    </div>
  );
}
