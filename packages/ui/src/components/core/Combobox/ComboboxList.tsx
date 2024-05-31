import React, { forwardRef, Children, isValidElement } from 'react';

import { useComboboxContext } from './context';

import type { ReactNode } from 'react';

export interface ComboboxListProps {
  children?: ReactNode;
}

export const ComboboxList = forwardRef<HTMLDivElement, ComboboxListProps>(({ children, ...props }, ref) => {
  const { open, inputValue, isTyping } = useComboboxContext();

  if (!open) {
    return null;
  }

  const filteredChildren = isTyping ? filterChildren(children, inputValue) : children;
  return (
    <div
      className="border-gray300 absolute top-14 z-10 flex w-full flex-col rounded border bg-white p-2"
      {...props}
      ref={ref}
    >
      {filteredChildren}
    </div>
  );
});
ComboboxList.displayName = 'ComboboxList';

const filterChildren = (children: ReactNode, inputValue: string) =>
  Children.toArray(children).filter((child) => {
    if (isValidElement(child)) {
      const element = child as React.ReactElement<{ value: string }>;
      return element.props.value.toLowerCase().includes(inputValue.toLowerCase());
    }
    return false;
  });
