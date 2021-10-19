import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18nBackend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'az'],
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      checkWhitelist: true
    },
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;