import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const getInitialLanguage = () => {
   if (typeof window !== 'undefined') {
      return localStorage.getItem('i18nextLng') || 'en';
   }

   return 'en'; // default language in case of server-side rendering
};

i18n

   // Enables the i18next backend
   .use(Backend)

   // Enable automatic language detection
   .use(LanguageDetector)

   // Enables the hook initialization module
   .use(initReactI18next)
   .init({
      lng: getInitialLanguage(),
      backend: {
         /* translation file path */
         loadPath: '/locales/{{lng}}.json',
      },
      fallbackLng: 'en',
      debug: false,
      keySeparator: false,
      react: {
         useSuspense: false,
      },
      interpolation: {
         escapeValue: false,
         formatSeparator: ',',
      },
   });

export default i18n;
