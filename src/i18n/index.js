import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "app_name": "לורם איפסום"
    }
  },
  he: {
    translation: {
      "app_name": "Lorem Ipsum"
    }
  }
};

i18n.use(initReactI18next).init({
    resources,
    lng: I18nManager.isRTL ? 'he' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;