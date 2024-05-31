import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  cn('inline-flex gap-1 items-center rounded'),

  {
    variants: {
      variant: {
        solid: 'bg-primary500 text-text-white active:bg-primary700',
        outlined: 'border border-gray300 active:border-primary500 active:text-primary500 active:bg-primary50',
        text: '',
      },

      buttonType: {
        primary: '',
        secondary: '',
        tertiary: '',
      },

      size: {
        // GYU-TODO: typography 적용하기
        xl: 'h-12 px-6 py-3 rounded-md',
        lg: 'h-9 px-3 py-1.5',
        md: 'h-8 px-3 py-1.5',
        sm: 'h-7 px-2 py-1',
      },
      disabled: {
        true: 'text-text300 active:bg-transparent active:border-gray300 active:text-text300 cursor-auto',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        buttonType: 'primary',
        className: 'bg-primary500 text-text-white active:bg-primary700',
      },
      {
        variant: 'solid',
        buttonType: 'secondary',
        className: 'bg-gray700 text-text-white active:bg-gray800',
      },
      {
        variant: 'solid',
        buttonType: 'tertiary',
        className: 'bg-gray50 text-text700 active:bg-gray100',
      },
      {
        variant: 'solid',
        disabled: true,
        className: 'text-text300 bg-gray50 border-gray50 active:bg-transparent cursor-auto',
      },
      {
        variant: 'text',
        buttonType: 'primary',
        className: 'text-primary500 active:text-primary600',
      },
      {
        variant: 'text',
        buttonType: 'secondary',
        className: 'text-text700 active:text-gray800',
      },
      {
        variant: 'text',
        buttonType: 'tertiary',
        className: 'text-text500 active:text-gray600',
      },
      {
        variant: 'text',
        disabled: true,
        className: 'text-text300 active:text-text300',
      },
    ],
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className, //
      variant = 'solid',
      buttonType = 'primary',
      size = 'md',
      asChild = false,
      disabled,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <div className={cn(buttonVariants({ variant, buttonType, size, disabled }), className)}>
        {leftIcon ? leftIcon : null}
        <Comp className={cn('flex h-full items-center')} ref={ref} {...props} />
        {rightIcon ? rightIcon : null}
      </div>
    );
  },
);
Button.displayName = 'Button';

Button.defaultProps = {
  variant: 'solid',
  buttonType: 'primary',
  size: 'md',
  asChild: false,
};

export { Button, buttonVariants };
