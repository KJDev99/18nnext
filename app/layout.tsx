"use client";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

import "./globals.css";
import React, { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    // Handle language change based on the URL or other logic
    const storedLanguage = localStorage.getItem("language") || "uz"; // Default to 'uz' if no language is stored
    i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <html lang={i18n.language}>
      <body>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </body>
    </html>
  );
}
