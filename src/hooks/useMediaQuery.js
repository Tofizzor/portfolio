import { useSyncExternalStore } from 'react';

/**
 * Subscribe to a CSS media query (matches Tailwind `md` when query is `(min-width: 768px)`).
 * Uses `useSyncExternalStore` so the first client paint matches the device without a wrong flash.
 * @param {string} query e.g. `(min-width: 768px)`
 */
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener('change', onStoreChange);
      return () => mq.removeEventListener('change', onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** @returns {boolean} True when viewport is at least Tailwind `md` (768px). */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 768px)');
}
