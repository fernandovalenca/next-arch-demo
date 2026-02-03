import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { ROUTING } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(ROUTING.locales, requested) ? requested : ROUTING.defaultLocale;

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
