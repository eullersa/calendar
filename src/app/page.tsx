"use client";

import { TextField } from "@/components";
import { Select } from "@/components/molecules/Select";
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
        <Flex $vertical>
          <TextField
            label="Escolha o aluno"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            icon={<PiUserDuotone />}
            placeholder="Digite o nome do aluno"
          />
          <Flex $fullWidth>
            <Select
              items={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
                { label: "Option 4", value: "option4" },
                { label: "Option 5", value: "option5" },
              ]}
            />
            <Select
              items={[
                { label: "Option 1", value: "option1" },
                { label: "Option 2", value: "option2" },
                { label: "Option 3", value: "option3" },
                { label: "Option 4", value: "option4" },
                { label: "Option 5", value: "option5" },
                { label: "Option 6", value: "option6" },
                { label: "Option 7", value: "option7" },
                { label: "Option 8", value: "option8" },
                { label: "Option 9", value: "option9" },
                { label: "Option 10", value: "option10" },
                { label: "Option 11", value: "option11" },
                { label: "Option 12", value: "option12" },
                { label: "Option 13", value: "option13" },
                { label: "Option 14", value: "option14" },
                { label: "Option 15", value: "option15" },
                { label: "Option 16", value: "option16" },
                { label: "Option 17", value: "option17" },
                { label: "Option 18", value: "option18" },
                { label: "Option 19", value: "option19" },
                { label: "Option 20", value: "option20" },
              ]}
            />
          </Flex>
        </Flex>
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
