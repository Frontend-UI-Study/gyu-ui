import { createContext, useContext } from 'react';

/**
 * @link
 * - 인터페이스 참고
 *   https://www.radix-ui.com/primitives/docs/components/tabs
 *
 *  GYU-TODO: 추후에 asChild 속성 처리 (Slot 으로 자식 컴포넌트 제어할 수 있도록)
 */
interface TabsContextValue {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical' | undefined;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (context == null) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};
