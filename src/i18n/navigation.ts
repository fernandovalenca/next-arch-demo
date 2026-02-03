import { createNavigation } from 'next-intl/navigation';

import { ROUTING } from './routing';

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(ROUTING);
