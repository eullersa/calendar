"use client";

import { InputWithLabel } from "@/components/molecules/InputWithLabel";
import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { Modal } from "@/ui/feedback/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { TimeSlot } from "@/ui/primitives/TimeSlot";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { HiUser } from "react-icons/hi";

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
        <InputWithLabel
          label="Escolha o aluno"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          icon={<HiUser />}
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
