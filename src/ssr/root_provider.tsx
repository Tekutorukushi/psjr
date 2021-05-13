import React, { ReactNode, useRef } from 'react';
import { Provider } from 'effector-react/ssr';
import { fork, hydrate } from 'effector';
import { root } from 'effector-root';

interface RootProviderProps {
  children: ReactNode;
  initialState: object;
}

export function RootProvider({ initialState, children }: RootProviderProps) {
  const { current } = useRef(
    (() => {
      const scope = fork(root);

      hydrate(scope, { values: initialState });

      return scope;
    })(),
  );

  return <Provider value={current}>{children}</Provider>;
}
