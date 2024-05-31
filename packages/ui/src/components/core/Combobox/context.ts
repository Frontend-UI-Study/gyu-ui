import { createContext, useContext } from 'react';

export interface ComboboxContextValue {
  value: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  onItemClick?: (value: string) => void;
  isTyping?: boolean;
  setIsTyping?: (isTyping: boolean) => void;
}

export const ComboboxContext = createContext<ComboboxContextValue | null>(null);

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext);
  if (!context) {
    throw new Error('useComboboxContext must be used within a ComboboxProvider');
  }
  return context;
};
