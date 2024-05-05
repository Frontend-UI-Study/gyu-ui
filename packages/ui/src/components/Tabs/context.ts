import { createContext, useContext } from 'react';

import type { Variant } from './types';

interface TabsContextValue {
  variants?: Variant;
  flexible?: boolean;
  fixed?: boolean;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (context == null) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};
