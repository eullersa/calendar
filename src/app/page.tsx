import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Calendar");
  return <div>{t("title")}</div>;
}
