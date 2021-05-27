/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { fork, hydrate } from 'effector';
import { root } from 'effector-root';

import { isBrowser } from './is_browser';

let isFirstHydration = true;

interface PageProps {
  initialState: any;
}

export const useMergeState = (pageProps: PageProps) => {
  if (isBrowser()) {
    const syncHydration = isFirstHydration;
    isFirstHydration = false;

    const scope = fork(root);

    useEffect(() => {
      if (syncHydration) return;
      hydrate(scope, {
        values: pageProps.initialState ?? {},
      });
    }, [pageProps, syncHydration]);

    if (syncHydration) {
      hydrate(scope, {
        values: pageProps.initialState ?? {},
      });
    }
    return scope;
  }
  return fork(root, {
    values: pageProps.initialState ?? {},
  });
};
