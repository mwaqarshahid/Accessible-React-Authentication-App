import { useState } from "react";
import type { ReactNode } from "react";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";
import { LanguageContext } from "./LanguageContext";
import { Language } from "./types";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const translations = language === "en" ? enTranslations : arTranslations;
  const isRTL = language === "ar";

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
    // Update document direction
    document.documentElement.dir = language === "en" ? "rtl" : "ltr";
  };

  return (
    <LanguageContext.Provider
      value={{ language, translations, toggleLanguage, isRTL }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
