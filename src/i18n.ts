import i18n from 'i18next'
import { initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import no from './locales/no.json'
import hr from './locales/hr.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            no: { translation: no },
            hr: { translation: hr }
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n