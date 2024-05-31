import { forwardRef } from 'react';

import type { HTMLAttributes } from 'react';

type ComboboxEmptyProps = HTMLAttributes<HTMLDivElement>;

export const ComboboxEmpty = forwardRef<HTMLInputElement, ComboboxEmptyProps>(({ ...props }, ref) => {
  return <div className="">ComboboxEmpty</div>;
});
ComboboxEmpty.displayName = 'ComboboxEmpty';
