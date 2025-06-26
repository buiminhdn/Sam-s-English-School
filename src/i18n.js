import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Translation files
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import zh from "./locales/zh.json"; // Assuming you have a Chinese translation file

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass i18n to react-i18next
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
      zh: { translation: zh }, // Add Chinese translations
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;
