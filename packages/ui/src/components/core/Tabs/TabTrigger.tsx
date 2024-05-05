import React, { type HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

import { useTabsContext } from './context';

export interface TabTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabTrigger = React.forwardRef<HTMLButtonElement, TabTriggerProps>(
  (
    {
      value, //
      className,
      ...props
    },
    ref,
  ) => {
    const { value: localValue, onValueChange } = useTabsContext();

    return (
      <button
        aria-selected={localValue === value}
        className={cn(
          'display border-gray-black flex items-center justify-center text-nowrap p-2 aria-selected:border-b-2',
          className,
        )}
        onClick={() => {
          onValueChange?.(value);
        }}
        ref={ref}
        {...props}
      />
    );
  },
);
