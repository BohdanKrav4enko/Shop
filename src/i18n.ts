import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json"
import ua from "./locales/ua/translation.json"
import ru from "./locales/ru/translation.json"
import de from "./locales/de/translation.json"
import fr from "./locales/fr/translation.json"
import es from "./locales/es/translation.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ua: { translation: ua },
            ru: { translation: ru },
            de: { translation: de },
            fr: { translation: fr },
            es: { translation: es },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });

export default i18n;
