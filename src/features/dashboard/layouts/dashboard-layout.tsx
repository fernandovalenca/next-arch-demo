import type { PropsWithChildren } from 'react';

import { LocaleSwitcher } from '@/shared/ui/components/locale-switcher';
import { ThemeModeToggle } from '@/shared/ui/components/theme-mode-toggle';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/ui/primitives/breadcrumb';
import { Separator } from '@/shared/ui/primitives/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/ui/primitives/sidebar';

import { AppSidebar } from '../components/app-sidebar';

export default function DashboardLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Building Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="ml-auto flex items-center gap-2">
            <ThemeModeToggle />
            <LocaleSwitcher />
          </div>
        </header>

        {children}

        {/* <div className="space-y-1 p-4">
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
        </main> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
