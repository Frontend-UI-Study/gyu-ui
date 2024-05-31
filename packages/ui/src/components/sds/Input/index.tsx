import * as React from 'react';
import { useCallback, useState } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { IconViewOff } from '@/components/sds/Input/IconViewOff';

import { IconViewOn } from './IconViewOn';
import { IconSearch } from './IconSearch';
import { IconClose } from './IconClose';

const inputWrapperVariants = cva(
  'border-gray200 focus-within:border-gray700 placeholder:text-gray400 flex items-center justify-center rounded-md  px-4 py-2.5',
  {
    variants: {
      error: {
        true: 'focus-within:border-danger500 border-danger500',
      },
      disabled: {
        true: 'border-gray200 bg-gray50',
      },
      variant: {
        default: 'border',
        underline: 'border-b rounded-none bg-transparent',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
  },
);

const inputVariants = cva('text-text700 w-full outline-none', {
  variants: {
    disabled: {
      true: 'text-text300',
    },
    variant: {
      default: '',
      underline: '',
    },
  },
  compoundVariants: [
    {
      disabled: true,
      variant: 'underline',
      class: 'bg-gray-white',
    },
  ],
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 에러 유무
   */
  error?: boolean;
  /**
   * 입력시 clear 할 수 있는 버튼 표시 (onReset 이벤트 필요)
   */
  withClear?: boolean;
  /**
   * Search Input 으로 SearchIcon 표시
   */
  withSearch?: boolean;
  /**
   * clear Icon 클릭시 이벤트
   */
  onReset?: () => void;
  /**
   * Input UI 유형
   */
  variant?: 'default' | 'underline';
  /**
   * 최대 높이
   */
  fullWidth?: boolean;
  /**
   * 오른쪽 Slot (Icon)
   */
  rightSlot?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default', //
      error,
      withClear,
      withSearch,
      type,
      className,
      onReset,
      fullWidth = false,
      rightSlot,
      ...props
    },
    ref,
  ) => {
    const [viewOn, setViewOn] = useState(false);

    const handleReset = useCallback(() => {
      onReset?.();
    }, [onReset]);

    const disabled = props.disabled;
    const isPasswordType = type === 'password';
    const _type = type === 'password' && viewOn ? 'text' : type;
    return (
      <div className={cn(inputWrapperVariants({ error, disabled, variant, fullWidth }))}>
        <input
          // TODO: group 써서 처리하기 - 현재 찾아보니깐, group 으로 하기 어려운거 같음.
          // not 지원안함, 복자한 형제, 부모 제어를 위한 방식 없음?
          className={cn(inputVariants({ disabled, variant }), 'input ', className)}
          placeholder="placeholder"
          ref={ref}
          type={_type}
          {...props}
        />

        <div className="flex items-center gap-3">
          {withClear ? <IconClose className={cn('icon-close fill-gray-500')} onClick={handleReset} /> : null}
          {isPasswordType ? (
            viewOn ? (
              <IconViewOn
                onClick={() => {
                  setViewOn(false);
                }}
              />
            ) : (
              <IconViewOff
                onClick={() => {
                  setViewOn(true);
                }}
              />
            )
          ) : null}
          {withSearch ? <IconSearch className={cn('icon-search', disabled && 'fill-gray300')} /> : null}
          {rightSlot}
        </div>
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
