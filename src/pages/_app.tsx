import App, { AppProps, AppContext } from 'next/app';
import { Provider } from 'effector-react/ssr';

import { SearchModal } from '@app/features/search';
import { useMergeState } from '@app/ssr';

function PsjrApp({ Component, pageProps }: AppProps) {
  const scope = useMergeState(pageProps);

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
