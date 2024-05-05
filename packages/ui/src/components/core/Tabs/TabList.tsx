import React, { type HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { useTabsContext } from './context';

const tabListVariants = cva(cn('border-b-gray100 box-border flex flex gap-2 gap-2 border-b-2'), {
  variants: {
    orientation: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
  },
});

export type TabListProps = HTMLAttributes<HTMLDivElement>;
export const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({ className, ...props }, ref) => {
  const { orientation } = useTabsContext();

  return (
    <div
      aria-orientation={orientation}
      ref={ref}
      role="tablist"
      {...props}
      className={cn(tabListVariants({ orientation }), className)}
    />
  );
});
