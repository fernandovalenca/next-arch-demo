'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

import { usePathname, useRouter } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';
import { AVAILABLE_LOCALES } from '@/i18n/routing';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/primitives/select';

export function LocaleSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onLocaleChange(locale: Locale): void {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <Select disabled={isPending} defaultValue={activeLocale} onValueChange={onLocaleChange}>
      <SelectTrigger className="max-w-max p-3">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent className="border-none">
        <SelectGroup>
          {AVAILABLE_LOCALES.map(({ flag, id, label }) => (
            <SelectItem key={id} value={id}>
              <div className="flex items-center gap-2">
                <div
                  aria-label="Flag"
                  className="h-4 w-4 rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(/assets/flags/${flag}.svg)` }}
                />

                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
