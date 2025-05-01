"use client";

import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { Modal } from "@/ui/feedback/Modal/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { TimeSlot } from "@/ui/primitives/TimeSlot";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Calendar");
  return (
    <div>
      <Modal
        title={t("title")}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {t("description")}
      </Modal>
      <div>
        <SwitchThemeMode />
        <SwitchLocaleLanguage />
        {t("title")}
      </div>
      <Flex $flex="1 1 100%" $gap={10} $wrap $justify="center">
        <TimeSlot
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </Flex>
    </div>
  );
}
