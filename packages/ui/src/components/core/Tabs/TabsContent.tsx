import React from 'react';

import { cn } from '@/lib/utils';

import { useTabsContext } from './context';

import type { HTMLAttributes } from 'react';

export interface TabTriggerProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabContent = React.forwardRef<HTMLDivElement, TabTriggerProps>(
  (
    { value, className, ...props }, //
    ref,
  ) => {
    const { value: localValue } = useTabsContext();

    if (localValue !== value) return null;

    return (
      <div
        {...props}
        className={cn('bg-card text-card-foreground mt-2 rounded-lg border shadow-sm', className)}
        ref={ref}
      />
    );
  },
);
