"use client";

import { TextField } from "@/components";
import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { Modal } from "@/ui/feedback/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { TimeSlot } from "@/ui/primitives/TimeSlot";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PiUserDuotone } from "react-icons/pi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const t = useTranslations("Calendar");
  return (
    <div>
      <Modal
        title={t("title")}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TextField
          label="Escolha o aluno"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          icon={<PiUserDuotone />}
          placeholder="Digite o nome do aluno"
        />
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
