import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import EN from './assets/i18n/en.json'
import ES from './assets/i18n/es.json'
import EU from './assets/i18n/eu.json'

i18next
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    interpolation: {
      escapeValue: false
    },
    resources: {
      es: {translation: ES},
      eu: {translation: EU},
      en: {translation: EN},
    }
  }).then()

export default i18next
