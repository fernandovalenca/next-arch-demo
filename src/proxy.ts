import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { ROUTING } from './i18n/routing';

const intlMiddleware = createIntlMiddleware({
  locales: ROUTING.locales,
  defaultLocale: ROUTING.defaultLocale,
  localePrefix: ROUTING.localePrefix,
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
