import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/shared/ui/primitives/button';
import { Spinner } from '@/shared/ui/primitives/spinner';

type SubmitButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, className, isLoading = false, disabled, ...rest }, ref) => {
    return (
      <Button ref={ref} disabled={isLoading || disabled} className={cn('', className)} {...rest}>
        {isLoading && <Spinner data-testid="spinner" />}
        {children}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
