import App, { AppProps, AppContext } from 'next/app';
import { fork, Scope, serialize } from 'effector';
import { Provider } from 'effector-react/ssr';

import { SearchModal } from '@app/features/search';
import { isBrowser } from '@app/lib/is_browser';
import { root } from '@app/lib/root_domain';

let clientScope: Scope;

function PsjrApp({ Component, pageProps }: AppProps) {
  const scope = fork(root, {
    values: {
      ...(clientScope ? serialize(clientScope, { onlyChanges: true }) : {}),
      ...(pageProps.initialState ?? {}),
    },
  });

  if (isBrowser()) {
    clientScope = scope;
  }

  return (
    <Provider value={scope}>
      <Component {...pageProps} />
      <SearchModal />
    </Provider>
  );
}

PsjrApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default PsjrApp;
