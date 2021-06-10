import getConfig from 'next/config';

import { isBrowser } from './lib/is_browser';
import { isDev } from './lib/is_dev';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export function getBackendUrl(): string {
  if (isBrowser() || isDev()) {
    return publicRuntimeConfig.backendUrl;
  }

  // server in production
  return serverRuntimeConfig.secureBackendUrl;
}
