import { useEffect, useRef, useState } from 'react';

export function useModalContainer() {
  const container = useRef<HTMLElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (document?.body && !container.current) {
      const { body } = document;
      container.current = document.createElement('div');
      body!.appendChild(container.current);
    }

    if (container.current) {
      setIsReady(true);
    }
  }, []);

  return { container, isReady };
}
