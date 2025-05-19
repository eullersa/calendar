"use client";

import { TextField } from "@/components";
import { Select } from "@/components/molecules/Select";
import { Calendar } from "@/components/organisms/Calendar/Calendar";
import { SwitchLocaleLanguage } from "@/features/i18n";
import { SwitchThemeMode } from "@/features/theme";
import { Modal } from "@/ui/feedback/Modal";
import { Flex } from "@/ui/primitives/Flex/Flex";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiHourglassSimpleFill } from "react-icons/pi";
import { TbTimezone } from "react-icons/tb";

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
        <Flex $fullWidth $gap={10} $vertical>
          <TextField
            label="Email o aluno"
            icon={<MdEmail />}
            placeholder="Digite o email do aluno"
            type="email"
          />
          <Select
            placeholder="Select duration"
            icon={<PiHourglassSimpleFill />}
            items={[
              { label: "25 minutes", value: "option1" },
              { label: "50 minutes", value: "option2" },
              { label: "1 hour, 20 minutes", value: "option3" },
              { label: "1 hour, 50 minutes", value: "option4" },
              { label: "2 hours, 20 minutes", value: "option5" },
              { label: "2 hours, 50 minutes", value: "option6" },
              { label: "3 hours, 20 minutes", value: "option7" },
            ]}
          />
          <Flex $fullWidth $gap={10}>
            <Select
              placeholder="Select date"
              icon={<FaCalendar />}
              items={[
                { label: "Wed, May 14", value: "option1" },
                { label: "Thu, May 15", value: "option2" },
                { label: "Fri, May 16", value: "option3" },
                { label: "Sat, May 17", value: "option4" },
                { label: "Sun, May 18", value: "option5" },
                { label: "Mon, May 19", value: "option6" },
                { label: "Tue, May 20", value: "option7" },
                { label: "Wed, May 21", value: "option8" },
                { label: "Thu, May 22", value: "option9" },
                { label: "Fri, May 23", value: "option10" },
                { label: "Sat, May 24", value: "option11" },
                { label: "Sun, May 25", value: "option12" },
                { label: "Mon, May 26", value: "option13" },
                { label: "Tue, May 27", value: "option14" },
                { label: "Wed, May 28", value: "option15" },
                { label: "Thu, May 29", value: "option16" },
                { label: "Fri, May 30", value: "option17" },
                { label: "Sat, May 31", value: "option18" },
                { label: "Sun, June 1", value: "option19" },
                { label: "Mon, June 2", value: "option20" },
              ]}
            />
            <Select
              maxWidth={120}
              placeholder="Select time"
              icon={<BsClockFill />}
              items={[
                { label: "00:00", value: "option1" },
                { label: "01:00", value: "option2" },
                { label: "02:00", value: "option3" },
                { label: "03:00", value: "option4" },
                { label: "04:00", value: "option5" },
                { label: "05:00", value: "option6" },
                { label: "06:00", value: "option7" },
                { label: "07:00", value: "option8" },
                { label: "08:00", value: "option9" },
                { label: "09:00", value: "option10" },
                { label: "10:00", value: "option11" },
                { label: "11:00", value: "option12" },
                { label: "12:00", value: "option13" },
                { label: "13:00", value: "option14" },
                { label: "14:00", value: "option15" },
                { label: "15:00", value: "option16" },
                { label: "16:00", value: "option17" },
                { label: "17:00", value: "option18" },
                { label: "18:00", value: "option19" },
                { label: "19:00", value: "option20" },
                { label: "20:00", value: "option21" },
                { label: "21:00", value: "option22" },
                { label: "22:00", value: "option23" },
                { label: "23:00", value: "option24" },
                { label: "24:00", value: "option25" },
              ]}
            />
          </Flex>
        </Flex>
        <Flex $vertical $fullWidth $gap={10}>
          <Select
            isSearchable
            placeholder="Select student"
            icon={<FaUserAlt />}
            items={[
              { label: "Lucas", value: "option1" },
              { label: "Ana", value: "option2" },
              { label: "Marcos", value: "option3" },
              { label: "Maria", value: "option4" },
              { label: "João", value: "option5" },
              { label: "Fernanda", value: "option6" },
              { label: "Carlos", value: "option7" },
              { label: "Juliana", value: "option8" },
              { label: "Roberto", value: "option9" },
              { label: "Patrícia", value: "option10" },
            ]}
          />
          <Select
            isSearchable
            placeholder="Select timezone"
            icon={<TbTimezone />}
            items={[
              { label: "UTC-3", value: "option1" },
              { label: "UTC-2", value: "option2" },
              { label: "UTC-1", value: "option3" },
              { label: "UTC+0", value: "option4" },
              { label: "UTC+1", value: "option5" },
              { label: "UTC+2", value: "option6" },
              { label: "UTC+3", value: "option7" },
              { label: "UTC+4", value: "option8" },
              { label: "UTC+5", value: "option9" },
              { label: "UTC+6", value: "option10" },
            ]}
          />
        </Flex>
      </Modal>
      <div>
        <SwitchThemeMode />
        <SwitchLocaleLanguage />
        {t("title")}
      </div>
      <Calendar
        changeCalendar={() => {
          setIsOpen((prev) => !prev);
        }}
      />
    </div>
  );
}
