import { cn } from '@/lib/utils';

import type { ComponentPropsWithoutRef } from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'>;
export function IconViewOff({ className, ...props }: IconProps) {
  return (
    <svg
      className={cn('fill-gray500 cursor-pointer', className)}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M3.01934 20.0999L20.0996 3.01963L20.0803 3.00029L20.0811 2.99951L21 3.91904L17.9296 6.98947C20.0744 8.43702 21.2781 10.4641 21.7111 11.7628L21.7901 12L21.7111 12.2372C20.9758 14.4431 18.0168 18.75 11.9996 18.75C10.1212 18.75 8.54087 18.3303 7.23317 17.6859L3.91953 20.9995L3.01934 20.0999ZM5.05423 16.2265C3.53683 14.8933 2.64719 13.3146 2.28804 12.2372L2.20898 12L2.28804 11.7628C3.02336 9.55689 5.98229 5.25 11.9996 5.25C13.3036 5.25 14.4639 5.45227 15.4892 5.79158L14.2729 7.00785C13.5808 6.84345 12.824 6.75 11.9996 6.75C7.03582 6.75 4.52579 10.1376 3.79716 12C4.14365 12.8856 4.89298 14.1162 6.11744 15.1633L5.05423 16.2265ZM8.36274 12.918C8.28882 12.6243 8.24955 12.3167 8.24955 12C8.24955 9.92893 9.92849 8.25 11.9996 8.25C12.3163 8.25 12.6238 8.28926 12.9176 8.36318L11.4675 9.81328C10.6522 10.011 10.0105 10.6527 9.81283 11.4679L8.36274 12.918ZM16.8436 8.07547L15.071 9.84802C15.4986 10.4572 15.7496 11.1993 15.7496 12C15.7496 14.0711 14.0706 15.75 11.9996 15.75C11.1988 15.75 10.4567 15.499 9.84758 15.0715L8.36809 16.551C9.39321 16.9802 10.5987 17.25 11.9996 17.25C16.9633 17.25 19.4733 13.8624 20.2019 12C19.7665 10.887 18.6949 9.22934 16.8436 8.07547ZM13.9827 10.9363L10.9359 13.9832C11.2526 14.1534 11.6148 14.25 11.9996 14.25C13.2422 14.25 14.2496 13.2426 14.2496 12C14.2496 11.6152 14.153 11.253 13.9827 10.9363Z"
        // fill="#64748B"
        fillRule="evenodd"
      />
    </svg>
  );
}