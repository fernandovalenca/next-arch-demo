import '../globals.css';

import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import { ROUTING } from '@/i18n/routing';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next Arch Demo',
  description: 'Next Arch Demo',
};

export function generateStaticParams() {
  return ROUTING.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren<{ params: Promise<{ locale: string }> }>>) {
  const { locale } = await params;

  if (!hasLocale(ROUTING.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} bg-neutral-950 text-neutral-100 antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
