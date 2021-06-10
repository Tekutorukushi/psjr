import { isBrowser } from './is_browser';

export function isServer() {
  return !isBrowser();
}
