import * as React from 'react';
import { cva } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from '@/components/Tabs/context';

const tabsVariants = cva(cn('display items-center justify-center text-nowrap'), {
  variants: {
    variants: {
      main: cn('border-gray-black flex p-2 aria-selected:border-b-2'),
      secondary: cn(
        'bg-gray200 text-text500 aria-selected:bg-gray700 aria-selected:text-text-white rounded-full p-2',
        'aria-selected:bg-gray700 aria-selected:text-text-white',
      ),
      tertiary: cn(
        'border-gray300 rounded-md border px-2 py-1',
        'aria-selected:border-primary500 aria-selected:text-primary500',
      ),
    },
    fixed: {
      true: 'w-full',
    },
  },
});

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variants, fixed } = useTabsContext();

  return (
    <TabsPrimitive.Trigger //
      className={cn(
        tabsVariants({ variants, fixed }), //
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
