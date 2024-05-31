import { forwardRef, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Input } from '@/components';

import { useComboboxContext } from './context';

import type { InputProps } from '@/components';

export type ComboboxTriggerProps = InputProps;

export const ComboboxTrigger = forwardRef<HTMLInputElement, ComboboxTriggerProps>(({ ...props }, ref) => {
  const { open, onOpenChange, inputValue, onChangeInputValue } = useComboboxContext();

  const triggerRef = useRef<HTMLInputElement>(null);
  const localRef = ref || triggerRef; // GYU-TODO: composeRef ?? 처리방식 고민

  const onClickTrigger = () => {
    onOpenChange?.(!open);
    if (typeof localRef !== 'function') {
      localRef.current?.focus();
    }
  };

  return (
    <div className={cn('flex w-full items-center gap-2')} onClick={onClickTrigger}>
      <Input //
        fullWidth
        onChange={(e) => {
          onChangeInputValue(e.target.value);
        }}
        ref={localRef}
        rightSlot={<ChevronDown className="stroke-gray500 group-aria-expanded/trigger:rotate-180" />}
        value={inputValue}
        {...props}
      />
    </div>
  );
});

ComboboxTrigger.displayName = 'ComboboxTrigger';
