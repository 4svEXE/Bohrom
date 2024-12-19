import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import cz from "./locales/cz.json";
import en from "./locales/en.json";
import uk from "./locales/uk.json";
import de from "./locales/de.json";
import vi from "./locales/vi.json";
import pl from "./locales/pl.json";

const defaultFallback = "cz";
const defaultTranslationNamespace = "translation";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    defaultNS: defaultTranslationNamespace,
    fallbackLng: defaultFallback,
    resources: {
      cz: {
        translation: cz,
      },
      // en: {
      //   translation: en,
      // },
      // uk: {
      //   translation: uk,
      // },
      // de: {
      //   translation: de,
      // },
      // vi: {
      //   translation: vi,
      // },
      // pl: {
      //   translation: pl,
      // },
    },
    react: {
      useSuspense: true,
    },
  });

export default i18next;
