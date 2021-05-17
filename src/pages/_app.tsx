import App from 'next/app';
import type { AppProps, AppContext } from 'next/app';

import { SearchModal } from '@app/features/search';
import { RootProvider } from '@app/ssr';

function PsjrApp({ Component, pageProps }: AppProps) {
  return (
    <RootProvider initialState={pageProps.initialState}>
      <Component {...pageProps} />
      <SearchModal />
    </RootProvider>
  );
}

PsjrApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default PsjrApp;
