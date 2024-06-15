'use client';

import { useToast } from '@/components/ui/use-toast';
import { Toast, ToastProvider, ToastTitle, ToastViewport } from '@/components/ui/toast';

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function _Toast({ id, title, ...props }) {
        return (
          <Toast
            key={id}
            {...props}
            onClick={(event) => {
              props.onClick?.(event);
              dismiss(id);
            }}
          >
            <div className="grid gap-1">{title ? <ToastTitle>{title}</ToastTitle> : null}</div>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
