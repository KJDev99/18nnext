// app/page.js
"use client";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";

import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      <Link href="/testttt"> test</Link>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
