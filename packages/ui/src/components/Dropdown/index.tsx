import * as React from 'react';

import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import type { SelectProps } from '@radix-ui/react-select';

interface Item {
  value: NonNullable<SelectProps['value']>;
  option: string;
}

interface DropdownProps extends SelectProps {
  /**
   * Dropdown placeholder
   */
  placeholder: string;
  /**
   * Dropdown Option Items
   */
  items: Item[];
  /**
   * Dropdown Menu List Scroll 활성화 여부 (UI 적으로 scroll 이 생기면 해당 prop 을 true 로 설정)
   */
  hasScroll?: boolean;
}

export function Dropdown({ placeholder, hasScroll = false, items, ...props }: DropdownProps) {
  return (
    <Select {...props}>
      <SelectTrigger className={cn('aria-expanded:border-gray700 h-11')}>
        <SelectValue placeholder={<span className={cn('text-text400')}>{placeholder}</span>} />
      </SelectTrigger>
      <SelectContent className={cn('max-h-[246px] p-2')} hasScroll={hasScroll}>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
