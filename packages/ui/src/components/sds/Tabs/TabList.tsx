import * as React from 'react';
import { cva } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';
import { useTabsContext } from '@/components/sds/Tabs/context';

const tabsVariants = cva(cn('border-b-gray100 box-border flex gap-2 border-b-2'), {
  variants: {
    variants: {
      main: cn(''),
      secondary: cn('py-2'),
      tertiary: cn('py-2'),
    },
    flexible: {
      true: 'overflow-x-auto',
    },
  },
});

export type TabListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;

export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabListProps>(
  ({ className, ...props }, ref) => {
    const { variants: _variants, flexible } = useTabsContext();

    // GYU-TODO: item 과 list 아래 밑줄 씽크 맞추기
    return (
      <TabsPrimitive.List
        className={cn(tabsVariants({ variants: _variants, flexible }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
TabsList.displayName = TabsPrimitive.List.displayName;
