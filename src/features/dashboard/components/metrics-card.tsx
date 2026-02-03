import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { Card } from '@/shared/ui/primitives/card';

interface MetricsCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    percentage: string;
    isPositive: boolean;
  };
  chart?: ReactNode;
}

export function MetricsCard({ title, value, change, chart }: MetricsCardProps) {
  return (
    <Card className="p-4 shadow-none backdrop-blur">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-muted-foreground text-sm">{title}</h3>
        {chart ? <ArrowUpRight className="text-muted-foreground h-4 w-4" /> : null}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold">{value}</p>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-sm">+{change.value}</span>
            <span className={`text-sm ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {change.percentage}
            </span>
          </div>
        </div>
        {chart}
      </div>
    </Card>
  );
}
