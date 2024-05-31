import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import {
  Accordion as AccordionLocal,
  AccordionContent,
  AccordionTrigger,
  AccordionItem as AccordionItemLocal,
} from '@/components/ui/accordion';

import type { AccordionMultipleProps, AccordionSingleProps } from '@radix-ui/react-accordion';

const accordionVariants = cva(cn(), {
  variants: {
    size: {
      sm: 'px-4 py-3 md:px-8 md:py-3',
      lg: 'px-4 py-5 md:px-8 md:py-5',
    },
  },
});

const accordionItemVariants = cva(cn(''), {
  variants: {
    divider: {
      false: 'border-none',
    },
  },
});

interface AccordionItem {
  value: string;
  title: string;
  content?: string;
  description?: string;
}

interface BaseAccordionProps {
  items: AccordionItem[];
  size?: 'sm' | 'lg';
  divider?: boolean;
}

type AccordionProps = BaseAccordionProps & (AccordionSingleProps | AccordionMultipleProps);

export function Accordion({ items, size = 'sm', divider = false, className, ...props }: AccordionProps) {
  return (
    <AccordionLocal {...props} className={cn('', className)}>
      {items.map((item) => (
        <AccordionItemLocal
          className={cn('border-gray200', accordionItemVariants({ divider }))}
          key={item.value}
          value={item.value}
        >
          <AccordionTrigger className={cn('T2_600 text-text900 w-full gap-2', accordionVariants({ size }))}>
            <span className={cn('truncate')}>{item.title}</span>
          </AccordionTrigger>
          <AccordionContent className={cn('px-4 pb-2 pt-2 md:px-8')}>
            <div className={cn('B2 text-text700')}>{item.content}</div>
            <div className={cn('B2 text-text400')}>{item.description}</div>
          </AccordionContent>
        </AccordionItemLocal>
      ))}
    </AccordionLocal>
  );
}

Accordion.displayName = 'Accordion';
