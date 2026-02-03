import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  /* config options here */
  output: 'standalone',
} satisfies NextConfig;

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
