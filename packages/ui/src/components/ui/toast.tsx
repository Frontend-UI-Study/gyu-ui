'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';

import { cn } from '@/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    className={cn(
      'fixed left-1/2 top-1/2 z-[100] flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center rounded-[6px]',
      className,
    )}
    ref={ref}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full  data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
        'B1 flex h-11 w-80 items-center justify-center rounded-md bg-[#0F1A2ADB] py-[10px] text-white md:w-[688px]',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title className={cn('text-sm font-semibold', className)} ref={ref} {...props} />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

export { type ToastProps, ToastProvider, ToastViewport, Toast, ToastTitle };
