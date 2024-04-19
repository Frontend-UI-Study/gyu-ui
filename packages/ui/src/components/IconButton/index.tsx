import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const iconButtonVariants = cva('p-1.5 rounded', {
  variants: {
    variant: {
      normal: 'active:bg-primary50 active:fill-500',
      outlined: 'border border-gray300 active:bg-primary50 active:border-primary500 active:fill-500',
    },
    isToggle: {
      true: 'fill-500',
    },
    isRounded: {
      true: 'rounded-full',
    },
    disabled: {
      true: 'active:bg-transparent active:border-gray300 active:text-text300 cursor-auto',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  isToggle?: boolean;
  isRounded?: boolean;
  disabled?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className, //
      variant = 'normal',
      isToggle = false,
      isRounded = false,
      disabled = false,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, isToggle, isRounded, disabled, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
  variant: 'normal',
};

export { IconButton, iconButtonVariants };
