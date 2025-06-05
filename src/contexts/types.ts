import enTranslations from "@/locales/en.json";

export type Language = "en" | "ar";
export type Translations = typeof enTranslations;

export interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
  isRTL: boolean;
}
