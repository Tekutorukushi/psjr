import { useEffect, useRef } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export function useBodyScrollLock({ isOpen }: { isOpen: boolean }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    if (isOpen) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }
  }, [isOpen]);

  return { modalRef };
}
