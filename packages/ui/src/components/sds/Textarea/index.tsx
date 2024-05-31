import * as React from 'react';

import { cn } from '@/lib/utils';

import type { ChangeEvent } from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 입력할 수 있는 최대 글자 수
   */
  maxLength?: number;
  /**
   * helper text
   */
  helperText?: string;
  /**
   * textarea disabled
   */
  disabled?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, maxLength, helperText, onChange, ...props }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      if (maxLength && value.length > maxLength) {
        return;
      }
      onChange?.(e);
    };

    const currentValueLength = (props.value as string | undefined)?.length;
    return (
      <div className="flex flex-col gap-1">
        <textarea
          className={cn(
            'border-gray200 placeholder:text-text400 focus:border-gray700 disabled:bg-gray50 	text-text700 disabled:text-text300 resize-none rounded-md	border p-4 focus:outline-none',
            className,
          )}
          onChange={handleChange}
          placeholder="Placehlder"
          ref={ref}
          {...props}
        />
        <div className="mr-1 flex items-center justify-end gap-2">
          {helperText ? <span className="text-danger500">{helperText}</span> : null}
          {maxLength ? (
            <span className="text-text700 text-right">
              {currentValueLength}/{maxLength}
            </span>
          ) : null}
        </div>
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
