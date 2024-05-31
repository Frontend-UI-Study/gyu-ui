import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { useComboboxContext } from './context';

import type { HTMLAttributes } from 'react';

export interface ComboboxItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const ComboboxItem = forwardRef<HTMLInputElement, ComboboxItemProps>(({ value: itemValue, ...props }, ref) => {
  const { onItemClick, value } = useComboboxContext();

  return (
    <div
      className={cn('hover:bg-gray200 flex justify-between rounded p-1')}
      onClick={() => onItemClick?.(itemValue)}
      ref={ref}
      {...props}
    >
      <div className="">{props.children}</div>
      {itemValue === value ? '✔' : null}
    </div>
  );
});
ComboboxItem.displayName = 'ComboboxItem';
