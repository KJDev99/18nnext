"use client";
import { useTranslation } from "react-i18next";

const Test = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>asd</p>
      <h1>{t("welcome")}</h1>
    </div>
  );
};

export default Test;
