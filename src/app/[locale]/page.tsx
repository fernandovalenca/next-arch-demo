import { redirect } from 'next/navigation';

import { DEFAULT_LOCALE } from '@/i18n/routing';

const DEFAULT_ROUTE = 'sign-in';

export default function RootPage() {
  return redirect(`/${DEFAULT_LOCALE}/${DEFAULT_ROUTE}`);
}
