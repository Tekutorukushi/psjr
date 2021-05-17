import { MouseEventHandler, useCallback, useRef } from 'react';

export function useOverlayClick({ onClose }: { onClose?: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      // Click is inside of the modal window
      if (contentRef.current?.contains(event.target as Element)) {
        return;
      }

      onClose?.();
    },
    [],
  );

  return { contentRef, handleOverlayClick };
}
