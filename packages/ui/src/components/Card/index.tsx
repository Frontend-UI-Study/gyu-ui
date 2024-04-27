import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import type { HTMLAttributes, ElementType } from 'react';

const _Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('border-gray200 rounded-md border', className)} {...props} ref={ref} />
));
_Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('flex flex-col p-6', className)} ref={ref} {...props} />
));
CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}
const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, as, ...props }, ref) => {
  const Comp = as ?? 'h3';

  return <Comp className={cn('space-y-1.5 text-2xl font-semibold', className)} ref={ref} {...props} />;
});
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p className={cn('text-text400 text-sm', className)} ref={ref} {...props} />,
);
CardDescription.displayName = 'CardDescription';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('p-6 pt-0', className)} ref={ref} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn('p-6 pt-0', className)} ref={ref} {...props} />
));
CardFooter.displayName = 'CardFooter';

const Card = Object.assign(_Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export { Card };
