import { MetricsCard } from '@/features/dashboard/components/metrics-card';
import { StatsChartClient } from '@/features/dashboard/components/stats-chart.client';
import { VaultTable } from '@/features/dashboard/components/vault-table';
import DashboardLayout from '@/features/dashboard/layouts/dashboard-layout';
import { Button } from '@/shared/ui/primitives/button';
import { Card } from '@/shared/ui/primitives/card';

export default function Page() {
  return (
    <DashboardLayout>
      <div className="space-y-1 p-4">
        <h1 className="text-2xl font-bold">Overview</h1>
        <div className="text-muted-foreground text-sm">Aug 13, 2023 - Aug 18, 2023</div>
      </div>

      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <MetricsCard
            title="Your Balance"
            value="$74,892"
            change={{ value: '$1,340', percentage: '-2.1%', isPositive: false }}
          />
          <MetricsCard
            title="Your Deposits"
            value="$54,892"
            change={{ value: '$1,340', percentage: '+13.2%', isPositive: true }}
          />
          <MetricsCard
            title="Accrued Yield"
            value="$20,892"
            change={{ value: '$1,340', percentage: '+1.2%', isPositive: true }}
          />
        </div>

        <Card className="p-4 shadow-none">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">General Statistics</h2>
            <div className="hidden gap-2 md:flex">
              <Button size="sm" variant="default">
                Today
              </Button>
              <Button size="sm" variant="ghost">
                Last week
              </Button>
              <Button size="sm" variant="ghost">
                Last month
              </Button>
              <Button size="sm" variant="ghost">
                Last 6 month
              </Button>
              <Button size="sm" variant="ghost">
                Year
              </Button>
            </div>
          </div>
          <StatsChartClient />
        </Card>
        <div className="mt-4">
          <VaultTable />
        </div>
      </main>
    </DashboardLayout>
  );
}
