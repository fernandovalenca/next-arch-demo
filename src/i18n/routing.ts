import type { LocalePrefix } from 'next-intl/routing';
import { defineRouting } from 'next-intl/routing';

export type Locale = 'en' | 'pt';

export const LOCALES: Locale[] = ['en', 'pt'];

export const DEFAULT_LOCALE: Locale = 'pt';

export const DEFAULT_LOCALE_PREFIX: LocalePrefix = 'always';

export const LOCALE_COOKIE_NAME = 'NEXT_LOCALE';

export const ROUTING = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: DEFAULT_LOCALE_PREFIX,
  localeDetection: false,
  localeCookie: {
    name: LOCALE_COOKIE_NAME,
  },
});

type CountryFlag = 'BR' | 'US';

type AvailableLocale = {
  id: Locale;
  flag: CountryFlag;
  label: string;
};

export const AVAILABLE_LOCALES: AvailableLocale[] = [
  {
    id: 'pt',
    flag: 'BR',
    label: 'PT-br',
  },
  {
    id: 'en',
    flag: 'US',
    label: 'EN-us',
  },
];
