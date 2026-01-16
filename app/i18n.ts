"use client";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from '@/locales/pt/translation.json';
import enTranslation from '@/locales/en/translation.json';
import itTranslation from '@/locales/it/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'pt',
    supportedLngs: ['pt', 'en', 'it'],
    interpolation: {
      escapeValue: false, // React já escapa por padrão
    },
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
      it: { translation: itTranslation}
    },
    detection: {
      order: ['localStorage', 'navigator'], // salva a escolha + detecta idioma do navegador
      caches: ['localStorage'],
    },
  });

export default i18n;