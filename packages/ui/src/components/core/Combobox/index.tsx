import { useState, forwardRef, useRef } from 'react';

import { useOutsideClick } from '@/shared/hooks/useOutsideClick';

import { ComboboxContext } from './context';
import { ComboboxTrigger } from './ComboboxTrigger';
import { ComboboxList } from './ComboboxList';
import { ComboboxItem } from './ComboboxItem';
import { ComboboxEmpty } from './ComboboxEmpty';

import type { PropsWithChildren } from 'react';

interface ComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Combobox = forwardRef<HTMLDivElement, PropsWithChildren<ComboboxProps>>(({ onValueChange, ...props }, ref) => {
  const [value, setValue] = useState(props.value);
  const [inputValue, setInputValue] = useState('');
  const [open, setOpen] = useState(props.open ?? false);
  const [isTyping, setIsTyping] = useState(false);

  // GYU-TODO: forwardRef 와 ref 를 지금은 분리했는데 합칠수는 없을까??
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref: wrapperRef,
    handler: () => {
      onOpenChange(false);
    },
  });

  const onOpenChange = (newOpen: boolean) => {
    if (props.onOpenChange) {
      props.onOpenChange(newOpen);
      return;
    }

    setOpen(newOpen);
  };

  const onChangeInputValue = (newInputValue: string) => {
    if (newInputValue === '') {
      setValue('');
      onValueChange('');
    }
    setIsTyping(true);
    setInputValue(newInputValue);
  };

  const onItemClick = (newValue: string) => {
    setIsTyping(false);
    setValue(newValue);
    setInputValue(newValue);
    onOpenChange(false);
    onValueChange(newValue);
  };

  return (
    <ComboboxContext.Provider
      value={{
        value, //
        open,
        inputValue,
        isTyping,
        onOpenChange,
        onChangeInputValue,
        onItemClick,
        setIsTyping,
      }}
    >
      <div ref={wrapperRef}>
        <div ref={ref} {...props} className="relative" />
      </div>
    </ComboboxContext.Provider>
  );
});
Combobox.displayName = 'Combobox';

const CompoundCombobox = Object.assign(Combobox, {
  Trigger: ComboboxTrigger,
  List: ComboboxList,
  Empty: ComboboxEmpty,
  Item: ComboboxItem,
});

export { CompoundCombobox as CoreCombobox };
