'use client';

import dynamic from 'next/dynamic';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const StatsChart = dynamic(
  () => sleep(1000).then(() => import('@/features/dashboard/components/stats-chart').then((mod) => mod.StatsChart)),
  {
    ssr: false,
    loading: () => <div className="bg-muted h-75 w-full animate-pulse rounded-lg" />,
  },
);

export function StatsChartClient() {
  return <StatsChart />;
}
