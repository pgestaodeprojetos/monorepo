import i18next, { TOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { $Dictionary } from 'i18next/typescript/helpers';
import en from './locales/en';
import pt from './locales/pt';

export const defaultLanguage = 'pt-BR';

i18next.use(initReactI18next).init({
  fallbackLng: 'pt-BR',
  lng: defaultLanguage,
  debug: true,
  resources: {
    en,
    pt,
  },
});

export const translation = (
  key: string | string[],
  options: (TOptions & $Dictionary) | undefined = {},
) => i18next.t(key, options);

export default i18next;
