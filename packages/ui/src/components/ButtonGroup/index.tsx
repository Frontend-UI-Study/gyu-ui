import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonGroupVariants = cva('flex justify-center items-center', {
  variants: {
    variant: {
      default: 'gap-2',
      // GYU-TODO: 현재는 순수 tailwindcss 로만 제어했는데 복잡해지면 아래 패턴으로 구현?)
      // React.Children.toArray(children).filter(React.isValidElement);
      // GYU-TODO: [&_div] 해당 부분, alias 설정 또는 a11y 적용 또는 가독성 좋게 하기
      segment: '[&>div:first-child]:rounded-l [&>div:last-child]:rounded-r [&>div]:rounded-none',
      text: "[&_div]:p-0 [&_div]:after:content-[''] [&_div]:after:mx-2 [&>div]:after:text-gray200 [&>div]:after:bg-gray200 [&>div]:after:w-[1px] [&>div]:after:h-[30%] [&_div:last-child]:after:content-none",
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {
  asChild?: boolean;
}

function ButtonGroup({ className, variant = 'default', ...props }: ButtonGroupProps) {
  return <div className={cn(buttonGroupVariants({ variant, className }))} {...props} />;
}
ButtonGroup.displayName = 'Button';

export { ButtonGroup, buttonGroupVariants };
