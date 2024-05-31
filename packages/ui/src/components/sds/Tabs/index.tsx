'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

import { TabsContext } from './context';
import { TabsContent } from './TabsContent';
import { TabsTrigger } from './TabTrigger';
import { TabsList } from './TabList';

import type { Variant } from './types';

interface TabsProps extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'asChild'> {
  /**
   * 탭의 형태
   */
  variants?: Variant;
  /**
   * tab item 이 스크롤되어 보이는 상태
   */
  flexible?: boolean;
  /**
   * tab item 이 컨테이너 사이즈에 맞게 보이는 상태
   */
  fixed?: boolean;
}

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ variants = 'main', flexible = false, fixed = false, className, ...props }, ref) => (
    <TabsContext.Provider value={{ variants, flexible, fixed }}>
      <TabsPrimitive.Root className={cn('', className)} ref={ref} {...props} />
    </TabsContext.Provider>
  ),
);

const CompoundTabs = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { CompoundTabs as Tabs };
