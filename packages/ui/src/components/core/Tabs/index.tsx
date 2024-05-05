import * as React from 'react';
import { useState } from 'react';

import { TabsContext } from './context';
import { TabContent } from './TabsContent';
import { TabTrigger } from './TabTrigger';
import { TabList } from './TabList';

interface TabsProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical' | undefined;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      // value, //
      defaultValue = '',
      // onValueChange,
      orientation = 'horizontal',
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);

    return (
      <TabsContext.Provider
        value={{
          value,
          onValueChange: setValue,
          orientation,
        }}
      >
        <div {...props} ref={ref} />
      </TabsContext.Provider>
    );
  },
);

const CompoundTabs = Object.assign(Tabs, {
  TabList,
  TabTrigger,
  TabContent,
});

export { CompoundTabs as CoreTabs };
